package com.example.demo.services;

import com.example.demo.models.Product;
import com.example.demo.repositories.RepositoryProduct;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author perez
 */

@Service
public class ServiceProduct {
    
    @Autowired
    private RepositoryProduct rp;
    
    public List<Product> listAll(String keyWord){
        if(keyWord!=null){
            return rp.findAll(keyWord);
        }
        return rp.findAll();
    }
    
    public void save(Product p){
        rp.save(p);
    }
    
    public Product get(Long id){
        return rp.findById(id).get();
    }
    
    public void delete(Long id){
        rp.deleteById(id);
    }
    
}
