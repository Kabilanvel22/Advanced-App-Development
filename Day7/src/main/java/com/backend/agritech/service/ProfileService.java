package com.backend.agritech.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.backend.agritech.Utils.ImageUtils;
import com.backend.agritech.enity.Profile;
import com.backend.agritech.repository.ProfileRepository;


@Service
public class ProfileService {
    @Autowired
    private ProfileRepository repo;

    public List<Profile> getAllDetails() {
        return repo.findAll();
    }

    public Optional<Profile> getUserById(int id) {
        return repo.findById(id);
    }

    public void saveOrUpdate(Profile profile) {
        repo.save(profile);
    }

    public void updateUser(int id, Profile user) {
        Optional<Profile> optionalUser = repo.findById(id);
        if (optionalUser.isPresent()) {
            Profile users = optionalUser.get();
            users.setFirstname(user.getFirstname());
            users.setLastName(user.getLastName());
            users.setMobileNumber(user.getMobileNumber());
            users.setAltMobileNumber(user.getAltMobileNumber());
            users.setAddress(user.getAddress());
            users.setPinCode(user.getPinCode());
            repo.save(users);
        }
    }

    public void deleteUser(int id) {
        repo.deleteById(id);
    }

    public ResponseEntity<String> uploadImage(MultipartFile file) {
        try {
            Profile profile = new Profile();
            profile.setProfileImage(ImageUtils.compressImage(file.getBytes()));
            repo.save(profile);
            return ResponseEntity.ok().body("File uploaded successfully: " + file.getOriginalFilename());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file: " + e.getMessage());
        }
    }

    public ResponseEntity<byte[]> downloadImage(int id) {
        Optional<Profile> optionalProfile = repo.findById(id);
        return optionalProfile.map(profile -> ResponseEntity.ok()
                .contentType(org.springframework.http.MediaType.IMAGE_JPEG)
                .body(ImageUtils.decompressImage(profile.getProfileImage())))
                .orElse(ResponseEntity.notFound().build());
    }

}
