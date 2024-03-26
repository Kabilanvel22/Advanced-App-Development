package com.backend.agritech.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.agritech.dto.request.AuthenticationRequest;
import com.backend.agritech.dto.request.RegisterRequest;
import com.backend.agritech.dto.response.AuthenticationResponse;
import com.backend.agritech.enity.User;
import com.backend.agritech.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthenticationController {

    @Autowired
    private final AuthenticationService service;


    // Admin Controller

    @PostMapping("/admin/register")
    public ResponseEntity<String> adminregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.adminregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "Admin Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return ResponseEntity.ok().body(createdmessage);
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<AuthenticationResponse> adminAuthenticate(@RequestBody AuthenticationRequest adminrequest){
        return ResponseEntity.ok(service.adminAuthenticate(adminrequest));
    }
    
    @GetMapping("/admin/getadmin/{email}")
    public ResponseEntity<Optional<User>> getadminById(@PathVariable String email){
    	return ResponseEntity.ok(service.getadminById(email));
    }
    
    //user controller
    @PostMapping("/user/register")
    public ResponseEntity<String> userregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.userregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "User Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return ResponseEntity.ok().body(createdmessage);
    }
    
    @PostMapping("/user/authenticate")
    public ResponseEntity<AuthenticationResponse> userAuthenticate(@RequestBody AuthenticationRequest userrequest){
        return ResponseEntity.ok(service.userauthenticate(userrequest));
    }
    
    @GetMapping("/user/getuser/{email}")
    public ResponseEntity<Optional<User>> getuserById(@PathVariable String email){
    	return ResponseEntity.ok(service.getuserById(email));
    }
    
}
