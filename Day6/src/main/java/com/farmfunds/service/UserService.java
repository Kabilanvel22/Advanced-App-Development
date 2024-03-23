package com.farmfunds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmfunds.entity.UserInfo;
import com.farmfunds.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserInfo> getAllUserInfo() {
        return userRepository.findAll();
    }
    
    @SuppressWarnings("null")
    public Optional<UserInfo> getUserInfoByEmail(String email) {
        return userRepository.findById(email);
    }

    @SuppressWarnings("null")
    public UserInfo saveUserInfo(UserInfo userInfo) {
        return userRepository.save(userInfo);
    }

    @SuppressWarnings("null")
    public void deleteUserInfo(String email) {
        userRepository.deleteById(email);
    }
}
