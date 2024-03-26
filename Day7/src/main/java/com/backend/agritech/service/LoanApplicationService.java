package com.backend.agritech.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.agritech.enity.LoanApplication;
import com.backend.agritech.repository.LoanApplicationRepository;

@Service
public class LoanApplicationService {
    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    public List<LoanApplication> getAllLoanApplications() {
        return loanApplicationRepository.findAll();
    }

    public Optional<LoanApplication> getLoanApplicationById(int id) {
        return loanApplicationRepository.findById(id);
    }

    @SuppressWarnings("null")
    public LoanApplication saveLoanApplication(LoanApplication loanApplication) {
        return loanApplicationRepository.save(loanApplication);
    }

    public void deleteLoanApplication(int id) {
        loanApplicationRepository.deleteById(id);
    }

    public List<LoanApplication> findByEmail(String email) {
        return loanApplicationRepository.findByEmail(email);
    }

    public List<LoanApplication> findBySalary(int salary) {
        return loanApplicationRepository.findBySalary(salary);
    }

    public List<LoanApplication> findByLoanamount(int loanamount) {
        return loanApplicationRepository.findByLoanamount(loanamount);
    }

    public List<LoanApplication> findByLoantype(String loantype) {
        return loanApplicationRepository.findByLoantype(loantype);
    }

    public List<LoanApplication> findByStatus(String status) {
        return loanApplicationRepository.findByStatus(status);
    }
}

