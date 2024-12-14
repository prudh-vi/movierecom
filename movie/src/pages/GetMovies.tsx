'use client'

import React, { useState } from 'react';
import { Button } from "../components/ui/Button";
import { GridBackgroundDemo } from '../components/GridBackgroundDemo';
import { BackgroundLinesDemo } from '../components/BackgroundLinesDemo';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const SelectDemo = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance'];
  const ratings = [
    { label: 'Above 5', value: 5 },
    { label: 'Above 6', value: 6 },
    { label: 'Above 7', value: 7 },
    { label: 'Above 8', value: 8 },
    { label: 'Above 9', value: 9 }
  ];

  const handleGetMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('http://127.0.0.1:8000/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          genre: selectedGenre,
          rating: parseFloat(selectedRating) || 0
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data.movies || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-6 w-full max-w-4xl">
      <div className="border border-[#ffd700] rounded-lg p-6 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 bg-transparent">
          <Select onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-[180px] bg-black/50 border-[#ffd700] text-white">
              <SelectValue placeholder="Select Genre" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-[#ffd700]">
              <SelectGroup>
                <SelectLabel className="text-white">Genre</SelectLabel>
                {genres.map((genre) => (
                  <SelectItem
                    key={genre.toLowerCase()}
                    value={genre.toLowerCase()}
                    className="text-white"
                  >
                    {genre}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedRating}>
            <SelectTrigger className="w-[180px] bg-black/50 border-[#ffd700] text-white">
              <SelectValue placeholder="Select Rating" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-[#ffd700]">
              <SelectGroup>
                <SelectLabel className="text-white">Rating</SelectLabel>
                {ratings.map((rating) => (
                  <SelectItem
                    key={rating.value}
                    value={rating.value.toString()}
                    className="text-white"
                  >
                    {rating.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button 
            onClick={handleGetMovies}
            disabled={isLoading}
            className="bg-[#ffd700] hover:bg-[#ffd700]/90 text-black font-medium border border-[#ffd700] w-[180px]"
          >
            {isLoading ? 'Loading...' : 'Get Movies ✨'}
          </Button>
        </div>
      </div>

      {/* Results Area */}
      <div className="border border-[#ffd700] rounded-lg bg-black/20 backdrop-blur-sm min-h-[400px]">
        <div className="border-b border-[#ffd700] p-4">
          <h2 className="text-[#ffd700] text-lg font-semibold">
            {movies.length > 0 
              ? `Found ${movies.length} Movie${movies.length === 1 ? '' : 's'}`
              : 'Movie Results'}
          </h2>
        </div>
        
        <div className="p-4">
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-200">
              {error}
            </div>
          )}

          {!error && movies.length === 0 && !isLoading && (
            <div className="text-gray-400 text-center py-20">
              Select a genre and rating to find movies
            </div>
          )}

          {isLoading ? (
            <div className="text-[#ffd700] text-center py-20">
              Loading movies...
            </div>
          ) : (
            <div className="space-y-2">
              {movies.map((movie, index) => (
                <div 
                  key={index}
                  className="p-4 bg-black/40 border border-[#ffd700] rounded-md flex justify-between items-center"
                >
                  <span className="text-white font-medium">{movie.title}</span>
                  <span className="text-[#ffd700]">★ {movie.rating.toFixed(1)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const GetMovies = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <GridBackgroundDemo />
      </div>
      <div className="fixed inset-0 z-0">
        <BackgroundLinesDemo />
      </div>
      <div className="relative z-10 w-full pt-16 px-4">
        <div className="flex justify-center">
          <SelectDemo />
        </div>
      </div>
    </div>
  );
};

export default GetMovies;