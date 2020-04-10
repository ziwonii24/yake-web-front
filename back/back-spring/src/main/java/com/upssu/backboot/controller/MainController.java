package com.upssu.backboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.upssu.backboot.repo.CategoryRepository;
import com.upssu.backboot.service.NutrientsService;
import com.upssu.backboot.service.CategoryService;
import com.upssu.backboot.vo.Category;
import com.upssu.backboot.vo.Nutrients;
import com.upssu.backboot.vo.Symptoms;
import com.upssu.backboot.vo.result.ListResult;

@RestController
public class MainController {
	
	@Autowired
	CategoryService tempService;
	@Autowired
	NutrientsService nutrientsService;
	
	
	@RequestMapping(value="/test",method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
    public String isRunning() {
        return "I'm Alive!";
    }
	@GetMapping(value="/categories")
	public ListResult<Category> getCategoryAll(){
		
		return tempService.getAllItems();
	}
	@GetMapping(value="/nutrients")
	public ListResult<Nutrients> getNutrientsAll(){
		
		return nutrientsService.getAllItems();
	}

}
