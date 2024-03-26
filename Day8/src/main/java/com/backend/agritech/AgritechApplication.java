package com.backend.agritech;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"com.backend.agritech"})
public class AgritechApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgritechApplication.class, args);
	}

}
