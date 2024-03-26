package com.backend.agritech.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.agritech.enity.LoanSchema;
import com.backend.agritech.repository.LoanSchemaRepository;

@Service
public class LoanSchemaService {

    @Autowired
    private LoanSchemaRepository loanSchemaRepository;

    public List<LoanSchema> getAllLoanSchemas() {
        return loanSchemaRepository.findAll();
    }

    public List<LoanSchema> getLoanSchemasByLoan(String loan) {
        return loanSchemaRepository.findByLoan(loan);
    }

    @SuppressWarnings("null")
    public LoanSchema saveLoanSchema(LoanSchema loanSchema) {
        return loanSchemaRepository.save(loanSchema);
    }

    public void deleteLoanSchema(int id) {
        loanSchemaRepository.deleteById(id);
    }
}
