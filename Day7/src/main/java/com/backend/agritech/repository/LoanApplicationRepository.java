package com.backend.agritech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.agritech.enity.LoanApplication;

public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Integer> {

    List<LoanApplication> findByEmail(String email);
    List<LoanApplication> findBySalary(int salary);
    List<LoanApplication> findByLoanamount(int loanamount);
    List<LoanApplication> findByLoantype(String loantype);
    List<LoanApplication> findByStatus(String status);

}

