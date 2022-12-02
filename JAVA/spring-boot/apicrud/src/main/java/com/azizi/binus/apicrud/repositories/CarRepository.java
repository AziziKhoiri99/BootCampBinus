package com.azizi.binus.apicrud.repositories;

import com.azizi.binus.apicrud.entities.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<CarEntity, Integer> {

}
