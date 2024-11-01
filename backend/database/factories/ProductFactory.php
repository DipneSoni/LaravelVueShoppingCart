<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => str_replace(".", "", ucfirst(fake()->text(20))),
            'desc' => fake()->paragraph(),
            'price' => fake()->numberBetween(10, 50),
            'image' => fake()->imageUrl(),
        ];
    }
}
