package com.backend.agritech.Config;

import static com.backend.agritech.enity.enumerate.Permission.USER_CREATE;
import static com.backend.agritech.enity.enumerate.Permission.USER_DELETE;
import static com.backend.agritech.enity.enumerate.Permission.USER_READ;
import static com.backend.agritech.enity.enumerate.Permission.USER_UPDATE;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.backend.agritech.constants.Api;
import com.backend.agritech.enity.enumerate.Permission;
import com.backend.agritech.enity.enumerate.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
       http
       .cors(cors -> cors.configurationSource(corsConfigurationSource()))
       .csrf(csrf -> csrf.disable())
       .authorizeHttpRequests(authorize -> authorize
                    .requestMatchers("/**",
                            "/swagger-ui.html/",
                            "/swagger-ui/**",
                            "/v3/api-docs/**"
                    )
                    .permitAll()
            //Roles & Permissions
            .requestMatchers("/api/v1/user/**").hasRole( Role.USER.name())
       
            .requestMatchers(HttpMethod.GET, "/api/v1/user/**").hasAnyAuthority(USER_READ.name())
            .requestMatchers(HttpMethod.POST, "/api/v1/user/**").hasAnyAuthority(USER_CREATE.name())
            .requestMatchers(HttpMethod.PUT, "/api/v1/user/**").hasAnyAuthority(USER_UPDATE.name())
            .requestMatchers(HttpMethod.DELETE, "/api/v1/user/**").hasAnyAuthority(USER_DELETE.name())
       
            .requestMatchers("/api/v1/admin/**").hasRole(Role.ADMIN.name())
            .requestMatchers(HttpMethod.GET, "/api/v1/admin/**").hasAuthority(Permission.ADMIN_READ.name())
            .requestMatchers(HttpMethod.POST, "/api/v1/admin/**").hasAuthority(Permission.ADMIN_CREATE.name())
            .requestMatchers(HttpMethod.PUT, "/api/v1/admin/**").hasAuthority(Permission.ADMIN_UPDATE.name())
            .requestMatchers(HttpMethod.DELETE, "/api/v1/admin/**").hasAuthority(Permission.ADMIN_DELETE.name())
       
            .anyRequest().authenticated())
       .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
       .authenticationProvider(authenticationProvider)
       .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(Api.HEADERS);
        configuration.setAllowCredentials(true);
        configuration.setAllowedMethods(Api.METHODS);
        configuration.setAllowedOrigins(Api.ORIGINS);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
