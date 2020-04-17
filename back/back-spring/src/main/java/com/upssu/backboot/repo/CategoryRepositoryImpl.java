package com.upssu.backboot.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.upssu.backboot.vo.Category;


@Repository
public class CategoryRepositoryImpl implements CategoryRepository{
	
	@Override
	public List<Category> getAllItems(){
		List<Category> dummyDatas = new ArrayList<>();
		dummyDatas.add(new Category("눈"));
		dummyDatas.add(new Category("간"));
		dummyDatas.add(new Category("피로"));
		
		return dummyDatas;
	}
}
