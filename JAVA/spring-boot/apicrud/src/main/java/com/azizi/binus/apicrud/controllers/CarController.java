package com.azizi.binus.apicrud.controllers;

import com.azizi.binus.apicrud.entities.CarEntity;
import com.azizi.binus.apicrud.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/car")
public class CarController {

    @Autowired
    CarRepository carRepository;

    @GetMapping(value = "checkAPI")
    public String checkApi() {
        return "Hello World";
    }

    @PostMapping(value = "addNewCar")
    public CarEntity addNewCar(@RequestBody CarEntity param) {
        carRepository.save(param);
                return param;
    }

    @GetMapping(value = "getAllCar")
    public List<CarEntity> getAllCar() {
        return carRepository.findAll();
    }

    @GetMapping(value = "getById")
    public CarEntity getById(@RequestParam int id) {
        return carRepository.findById(id).get();
    }

    @PostMapping(value = "updateCar")
    public CarEntity updateCar(@RequestBody CarEntity param){
        return carRepository.save(param);
    }

    @GetMapping(value = "deleteCar")
    public String deleteCar(@RequestParam int id) {
        carRepository.deleteById(id);
        return "Success delete Car id: "+id;
    }
}
