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
    
    @Query("select p from Product p where p.name like %?1% or p.brand like %?1%")
    public List<Product> findAll(String keyWord);

    
}
