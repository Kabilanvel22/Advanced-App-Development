package com.backend.agritech.dto.request;

import com.backend.agritech.enity.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class RegisterRequest {

    private String email;
	private String userName;
	private String password;
	private Role role;

}
