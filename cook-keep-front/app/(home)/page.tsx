import { Slider } from "@/components/slider";
import React from 'react';
import ImageCollection from "@/components/image-collection";
import { fetchAppData , fetchRecipes} from "../../utils/apiUtils";
import { RecipeModel } from "@/models/RecipeModel"
import { getGreeting } from "@/utils/funcUtils";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {

	const session = await getServerSession(authOptions);
	const appData = await fetchAppData(); 
	const slidersData  = appData.sliders;
	const recipesData: RecipeModel[] = await fetchRecipes(null);	
	
	console.log("TEST SESSION ", session?.user);
	
	return (
	  <section className="md:py-4">
		<main>
		  
		 {session ? (<h1 className="pb-4 text-xl font-semibold text-white/80 md:text-xl lg:text-xl">
   			{getGreeting(session?.user?.firstName || "Guest")}
  		 </h1>)
		 : null
		 }
  
		  {/* Pass the appData to the Slider component */}
		  {slidersData && <Slider sliderData={slidersData} />}
		  
			  

		 	 <div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData} title={"Popular Recipes"} />}
            </div>

			<div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData.filter(recipe => recipe.genres.includes("Action"))} title={"Action recipes"} />}
            </div>	

			<div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData.filter(recipe => recipe.genres.includes("Horror"))} title={"Horror recipes"} />}
            </div>	

			<div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData.filter(recipe => recipe.genres.includes("Romance"))} title={"Romance recipes"} />}
            </div>

			<div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData.filter(recipe => recipe.genres.includes("Comedy"))} title={"Comedy recipes"} />}
            </div>	

			<div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData.filter(recipe => recipe.genres.includes("Crime"))} title={"Crime recipes"} />}
            </div>	

			<div className='p-1 mb-10 md:px-1'>
				{recipesData.length > 0 && <ImageCollection results={recipesData.filter(recipe => recipe.genres.includes("Drama"))} title={"Drama recipes"} />}
            </div>	


		</main>
	  </section>
	);
}
