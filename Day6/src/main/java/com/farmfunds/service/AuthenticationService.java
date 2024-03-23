package com.farmfunds.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.farmfunds.dto.request.AuthRequest;
import com.farmfunds.dto.request.RegisterRequest;
import com.farmfunds.dto.response.AuthenticationResponse;
import com.farmfunds.entity.AdminInfo;
import com.farmfunds.entity.Role;
import com.farmfunds.entity.UserInfo;
import com.farmfunds.repository.AdminRepository;
import com.farmfunds.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @SuppressWarnings("null")
    public AuthenticationResponse register(RegisterRequest request) {

        if (request.getRole().equals("user")) {

            Optional<UserInfo> check = userRepository.findByEmail(request.getEmail());
            if (check.isEmpty()) {
                var user = UserInfo
                        .builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
            }
            return AuthenticationResponse.builder()
                    .token("Email Already Exists !!")
                    .build();
        } else {
            Optional<AdminInfo> check = adminRepository.findByEmail(request.getEmail());
            if (check.isEmpty()) {
                var admin = AdminInfo
                        .builder()
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.ADMIN)
                        .build();
                adminRepository.save(admin);
                var jwtToken = jwtService.generateToken(admin);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
            }
            return AuthenticationResponse.builder()
                    .token("Admin Already Exists !!")
                    .build();
        }
    }

    public AuthenticationResponse authenticate(AuthRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse loginAdmin(AuthRequest request) {

        Optional<AdminInfo> admin = adminRepository.findByEmail(request.getEmail());

        if (admin.isEmpty()) {
            return AuthenticationResponse.builder()
                    .token("please register")
                    .build();
        }

        else {
            // String email = admin.get().getEmail();
            String password = request.getPassword();

            if (passwordEncoder.matches(password, admin.get().getPassword())) {
                return AuthenticationResponse.builder()
                        .token("login successfully")
                        .build();
            }
            return AuthenticationResponse.builder()
                    .token("oops")
                    .build();
        }

    }

}
