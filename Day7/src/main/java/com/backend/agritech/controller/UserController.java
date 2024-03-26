package com.backend.agritech.controller;

import java.util.Optional;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.agritech.dto.UserResponseDto;
import com.backend.agritech.dto.request.RegisterRequest;
import com.backend.agritech.dto.response.AuthenticationResponse;
import com.backend.agritech.enity.User;
import com.backend.agritech.service.AuthenticationService;
import com.backend.agritech.service.UserService;

@RestController
@RequestMapping("/api/v1/user")
@PreAuthorize("hasRole('USER')")

public class UserController {
	
	 private AuthenticationService authservice;
	 private  UserService service;

     @GetMapping("/user/get")
     @PreAuthorize("hasAuthority('user:READ')")
     public ResponseEntity<UserResponseDto> getAllUser(){
    UserResponseDto userResponseDto = service.getAllUser();
    return userResponseDto.getUsers().size()>0 ? ResponseEntity.status(200).body(userResponseDto) : ResponseEntity.status(404).body(userResponseDto); 
   }

	   @GetMapping("/user/get/{email}")
	   @PreAuthorize("hasAuthority('user:READ')")
	   public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = authservice.getuserById(email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


	  
	    @PostMapping("/user/add")
	    @PreAuthorize("hasAuthority('user:CREATE')")
	    public ResponseEntity<AuthenticationResponse> registerUser(
	        @RequestBody RegisterRequest request
	    ){
	        return ResponseEntity.ok(authservice.userregister(request));
	        
	    }


	    @PutMapping(value = "update/user/{email}", produces = "application/json")
	    @PreAuthorize("hasAuthority('user:UPDATE')")
	    public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User updatedUser){
	        authservice.updatedUser(email, updatedUser);
            return  ResponseEntity.ok().body(updatedUser);
	    }
	   
	    @DeleteMapping("/delete/user/{email}")
	    @PreAuthorize("hasAuthority('user:DELETE')")
	    public ResponseEntity<String>  deleteUser(@PathVariable String email){
	        authservice.deleteUserByUsername(email);
	        return ResponseEntity.ok("Deleted Successfully");
	    }

		
}

