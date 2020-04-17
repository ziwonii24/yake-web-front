package com.upssu.backboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upssu.backboot.repo.CategoryRepository;
import com.upssu.backboot.vo.result.ListResult;
import com.upssu.backboot.vo.result.SingleResult;

@Service
public class CategoryServiceImpl implements CategoryService{

	
	@Autowired
	CategoryRepository tempRepository;
	
	@Override
	public <T> ListResult<T> getAllItems() {
		ListResult<T> result = new ListResult<T>();
		result.setDatas(tempRepository.getAllItems());
		result.setResultCode(200);
		result.setSucccess(true);
		result.setMsg("성공했습니다.");
		return result;
	}

	@Override
	public <T> SingleResult<T> getItemByType(String type, String key) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteItemById(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <T> void updateItemById(T data) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <T> ListResult<T> getItemsByGenderAndAge() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> ListResult<T> getCategories() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
