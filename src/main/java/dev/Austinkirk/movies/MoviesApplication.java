package dev.Austinkirk.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	public static void main(String[] args) {
		System.out.println("MONGO_USER=" + System.getenv("MONGO_USER"));
		System.out.println("MONGO_CLUSTER=" + System.getenv("MONGO_CLUSTER"));
		System.out.println("MONGO_PASSWORD=" + System.getenv("MONGO_PASSWORD"));

		SpringApplication.run(MoviesApplication.class, args);
	}



}
