package com.backend.agritech.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.agritech.enity.Profile;
import com.backend.agritech.service.ProfileService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/profile")
@PreAuthorize("hasRole(USER)")
public class ProfileController {

    @Autowired
    private ProfileService ProfileService;

    @GetMapping("/getUserDetails")
    public ResponseEntity<List<Profile>> getAllDetails()
    {
        List<Profile> details = ProfileService.getAllDetails();
        return ResponseEntity.ok().body(details);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserDetailsOrDownloadImage(@PathVariable int id, HttpServletRequest request) {
    String path = request.getRequestURI();
    if (path.contains("getUserDetails")) {
        Optional<Profile> user = ProfileService.getUserById(id);
        return ResponseEntity.ok().body(user);
    } else {
        ResponseEntity<byte[]> imageData = ProfileService.downloadImage(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.IMAGE_JPEG)
                .body(imageData);
    }
}

    @PostMapping("/addUserDetail")
    public ResponseEntity<?> addUserOrUploadImage(@RequestParam(value = "image", required = false) MultipartFile file, @RequestBody(required = false) Profile profile) {
    if (file != null) {
        // Upload image
        ResponseEntity<String> uploadImage = ProfileService.uploadImage(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    } else if (profile != null) {
        // Add user details
        ProfileService.saveOrUpdate(profile);
        return ResponseEntity.ok().body("Profile Created Successfully");
    } else {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Neither image nor user profile provided in the request");
    }
}

    @PutMapping("/updateUserDetail/{id}")
    public ResponseEntity<Profile> updateUser(@PathVariable int id, @RequestBody Profile  user)
    {
        ProfileService.updateUser(id,user);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id)
    {
        ProfileService.deleteUser(id);
        return ResponseEntity.ok().body("Profile Deleted Successfully");
    }
    
}
