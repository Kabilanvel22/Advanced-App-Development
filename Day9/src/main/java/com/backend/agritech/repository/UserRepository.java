package com.backend.agritech.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.agritech.enity.User;

public interface UserRepository  extends JpaRepository<User,String>{
	
	User findByEmail(String email);
	
}
