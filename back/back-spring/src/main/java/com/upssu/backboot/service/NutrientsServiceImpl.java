package com.upssu.backboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upssu.backboot.repo.NutrientsRepo;
import com.upssu.backboot.vo.result.ListResult;
import com.upssu.backboot.vo.result.SingleResult;

@Service
public class NutrientsServiceImpl implements NutrientsService {
	@Autowired
	NutrientsRepo nutrientsRepo;

	@Override
	public <T> ListResult<T> getAllItems() {
		ListResult<T> result = new ListResult<T>();
		result.setDatas(nutrientsRepo.getAllItems());
		result.setSucccess(true);
		result.setResultCode(200);
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
	
	

}
