package com.farmfunds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmfunds.entity.UserInfo;
import java.util.Optional;


public interface UserRepository extends JpaRepository<UserInfo, String>{

    Optional<UserInfo> findByEmail(String email);
    
}
