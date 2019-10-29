/*
============================================
; Title: Exercise 8.2
; Author: Reva Baumann
; Date: 28 October 2019
; Modified By: Reva Baumann
; Description: Server-Side Communications 
;===========================================
*/

// Start Program

// Import Express
import * as express from 'express';
const app = express();

// Define the Interface
interface Composer {
    id: number,
    firstName: string,
    lastName: string,
}

// An Array of Composers
const composers: Composer[] = [
    {id: 1, firstName: "Johann", lastName: "Bach"},
    {id: 2, firstName: "Wolfgang", lastName:"Mozart"},
    {id: 3, firstName: "Ludwig", lastName: "Beethoven"},
    {id: 4, firstName: "Giuseppe", lastName: "Verdi"},
    {id: 5, firstName: "Frederic", lastName: "Chopin"},
  ];

  // Create function
  function getComposers(): Composer[] {
      return composers;
  }

  // Find the Composer based on id and return results
app.get('/', (request, response) => {
    response.send('The URL for Composers is http://localhost:3000/api/composers');
});

app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});

function getComposerById(composerId: number): Composer{
    return composers.find(c => c.id == composerId);
}

app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(request.params.id));
});

// Create Server and listen on Port 3000
const server = app.listen(3000, "localhost", () => {
    console.log("Listening on Port 3000!");
});