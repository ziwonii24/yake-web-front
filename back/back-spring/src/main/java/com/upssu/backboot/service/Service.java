package com.upssu.backboot.service;

import java.util.List;
import com.upssu.backboot.vo.result.ListResult;
import com.upssu.backboot.vo.result.SingleResult;

public interface Service {
	<T> ListResult<T> getAllItems();
	<T> SingleResult<T> getItemByType(String type, String key);
	void deleteItemById(int id);
	<T> void updateItemById(T data);	
}
