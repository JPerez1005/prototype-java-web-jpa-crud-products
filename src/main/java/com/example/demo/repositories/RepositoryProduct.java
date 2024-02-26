package com.example.demo.repositories;

import com.example.demo.models.Product;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * @author perez
 */
@Repository
public interface RepositoryProduct extends JpaRepository<Product, Long>{
    
}
