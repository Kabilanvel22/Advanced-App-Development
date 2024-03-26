package com.backend.agritech.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.agritech.enity.Profile;

public interface ProfileRepository extends JpaRepository<Profile,Integer>{

}
