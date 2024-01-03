"use client"
import React, { useEffect, useState, Context } from 'react';
import {fetchRecipes} from "../../../utils/apiUtils";
import ImageTile from '../../../components/image-tile'
import { RecipeModel } from "@/models/RecipeModel"

import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation';


function Favorites() {
    const [favoriteRecipes, setFavoriteRecipes] = useState<RecipeModel[]>([]);

    const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
        redirect('/login?callbackUrl=/favorites')
      }
    });
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Check if the movie IDs are in localStorage
          const favoriteRecipeIds = JSON.parse(localStorage.getItem('favorites') || '[]');
  
          // Fetch movie data for each favorite movie ID
          const recipePromises = favoriteRecipeIds.map(async (id: number) => {
            const recipeData = await fetchRecipes(id);
            return recipeData;
          });
  
          // Wait for all movie data requests to complete
          const recipe = await Promise.all(recipePromises);
  
          // Set the fetched movie data in state
          setFavoriteRecipes(recipe);
          console.log(recipe);

        } catch (error) {
          // Handle error if needed
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <h1 className="py-4 font-bold sm:text-base md:text-base lg:text-lg text-white/75 ">
      My favourite recipe
    </h1>

    {favoriteRecipes.length === 0 ? (
        <p>No favorite recipe found :(</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {favoriteRecipes.map((recipe: RecipeModel) => (
            <ImageTile key={recipe.id} result={recipe} isFavorite={localStorage?.getItem('favorites')?.includes(recipe.id.toString()) === true} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites