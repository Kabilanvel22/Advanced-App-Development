package com.backend.agritech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.agritech.enity.LoanSchema;

public interface LoanSchemaRepository extends JpaRepository<LoanSchema, Integer> {

    List<LoanSchema> findByLoan(String loan);

}
