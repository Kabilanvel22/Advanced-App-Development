package com.backend.agritech.service;

import org.springframework.stereotype.Service;

import com.backend.agritech.dto.UserResponseDto;

@Service
public interface UserService {

    UserResponseDto getAllUser();

}
