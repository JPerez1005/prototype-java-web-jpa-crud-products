package com.example.demo.drivers;

import com.example.demo.models.Product;
import com.example.demo.services.ServiceProduct;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author perez
 */

@Controller
public class ControllerProduct {
    
    @Autowired
    private ServiceProduct sp;
    
    @GetMapping("/")
    public String verPaginaDeInicio(Model m){
        List<Product> products=sp.listAll();
        m.addAttribute("products",products);
        return "index";
    }
    
    @GetMapping("/new")
    public String mostrarFormularioDeRegistrarProducto(Model m){
        Product p=new Product();
        m.addAttribute("product",p);
        return "views/new_product";
    }
    
    @PostMapping("/")
    public String guardarProducto(@ModelAttribute("product") Product p){
        sp.save(p);
        return "redirect:/";
    }
    
    @GetMapping("/edit/{id}")
    public ModelAndView mostrarFormularioDeEditar(@PathVariable(name="id")Long id){
        ModelAndView model = new ModelAndView("views/new_product");
        Product p=sp.get(id);
        model.addObject("product",p);
        return model;
    }

    @RequestMapping("/drop/{id}")
    public String deleteProduct(@PathVariable(name="id") Long id){
        sp.delete(id);
        return "redirect:/";
    }
    
}
