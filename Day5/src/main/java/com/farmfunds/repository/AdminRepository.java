package com.farmfunds.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmfunds.entity.AdminInfo;


public interface AdminRepository extends JpaRepository<AdminInfo, String>{
    Optional<AdminInfo> findByEmail(String email);
}
