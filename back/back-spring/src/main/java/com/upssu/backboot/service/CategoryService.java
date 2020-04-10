package com.upssu.backboot.service;

import com.upssu.backboot.vo.result.ListResult;

public interface CategoryService extends Service{
	<T> ListResult<T> getItemsByGenderAndAge();
	<T> ListResult<T> getCategories();
}
