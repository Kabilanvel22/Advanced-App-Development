package com.backend.agritech.controller;

import java.util.Optional;

//import org.springframework.beans.factory.annotation.Autowired;
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

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/loan/admin")
@PreAuthorize("hasRole('ADMIN','USER')")
@RequiredArgsConstructor
public class AdminController {

    private final AuthenticationService authservice;
    private UserService service;

    @GetMapping("/getall")
    @PreAuthorize("hasAuthority('admin:READ')")
   public ResponseEntity<UserResponseDto> getAllUser(){
    UserResponseDto userResponseDto = service.getAllUser();
    return userResponseDto.getUsers().size()>0 ? ResponseEntity.status(200).body(userResponseDto) : ResponseEntity.status(404).body(userResponseDto); 
   }
    
    @GetMapping("/get/{email}")
    @PreAuthorize("hasAuthority('user:READ')")
   public Optional<User> getUser(@PathVariable String email){
    Optional<User> user = authservice.getuserById(email);
    return user;
   }
    
    @PostMapping("/add")
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public ResponseEntity<AuthenticationResponse> registerUser(
        @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(authservice.adminregister(request));
        
    }


    @PutMapping(value = "/update/{email}", produces = "application/json")
    @PreAuthorize("hasAuthority('admin:UPDATE')")
    public ResponseEntity<String> updateStaff(@PathVariable String email, @RequestBody User updatedUser){
        authservice.updatedUser(email, updatedUser);
        String updatemessage = "Admin "+email+ " Updated";
        return ResponseEntity.ok().body(updatemessage);
    }
   


    @DeleteMapping("/delete/{email}")
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public ResponseEntity<String>  deleteUser(@PathVariable String email){
        authservice.deleteUserByUsername(email);
        String message = "Admin "+email + " Deleted Successfully";
        return ResponseEntity.ok().body(message);
    }

}

