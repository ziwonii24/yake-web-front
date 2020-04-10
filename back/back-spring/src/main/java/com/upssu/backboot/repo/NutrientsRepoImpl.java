package com.upssu.backboot.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.upssu.backboot.vo.Nutrients;

@Repository
public class NutrientsRepoImpl implements NutrientsRepo {

	@Override
	public List<Nutrients> getAllItems() {
		List<Nutrients> list =  new ArrayList<>();
		list.add(new Nutrients(1,"영양제1","https://picsum.photos/200/300","1000,000","3.3","설명설명설명설명설명설명1",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(2,"영양제2","https://picsum.photos/200/300","1100,000","3.3","설명설명설명설명설명설명2",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(3,"영양제3","https://picsum.photos/200/300","1200,000","3.3","설명설명설명설명설명설명3",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(4,"영양제4","https://picsum.photos/200/300","1300,000","3.3","설명설명설명설명설명설명4",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(5,"영양제5","https://picsum.photos/200/300","1400,000","3.3","설명설명설명설명설명설명5",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(6,"영양제6","https://picsum.photos/200/300","1500,000","3.3","설명설명설명설명설명설명6",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(7,"영양제7","https://picsum.photos/200/300","1600,000","3.3","설명설명설명설명설명설명7",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(8,"영양제8","https://picsum.photos/200/300","1700,000","3.3","설명설명설명설명설명설명8",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(9,"영양제9","https://picsum.photos/200/300","1800,000","3.3","설명설명설명설명설명설명9",new ArrayList<>(), new ArrayList<>()));
		list.add(new Nutrients(10,"영양제10","https://picsum.photos/200/300","1900,000","3.3","설명설명설명설명설명설명`0",new ArrayList<>(), new ArrayList<>()));
		return list;
	}
	
}
