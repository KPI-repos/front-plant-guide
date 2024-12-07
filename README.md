This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# PlantGuide API Documentation

## Overview
PlantGuide is an API designed for managing plant-related data, including information about climate, countries, families, plants, and more. It follows the OpenAPI Specification (version 3.0.1).

## API Endpoints

### Climate
- **GET /api/Climate/GetAll**: Retrieve all climate entries.
- **GET /api/Climate/GetById**: Retrieve a climate entry by its ID.
- **POST /api/Climate/add**: Add a new climate entry.
- **DELETE /api/Climate/Delete**: Delete a climate entry by ID.
- **PUT /api/Climate/Update**: Update an existing climate entry by ID.

### Country
- **GET /api/Country/GetAll**: Retrieve all countries.
- **GET /api/Country/GetById**: Retrieve a country by its ID.
- **POST /api/Country/add**: Add a new country.
- **DELETE /api/Country/Delete**: Delete a country by ID.
- **PUT /api/Country/Update**: Update an existing country by ID.

### Family
- **GET /api/Family/GetAll**: Retrieve all families.
- **GET /api/Family/GetById**: Retrieve a family by its ID.
- **POST /api/Family/add**: Add a new family.
- **DELETE /api/Family/Delete**: Delete a family by ID.
- **PUT /api/Family/Update**: Update an existing family by ID.

### FamilyPlant
- **GET /api/FamilyPlant/GetAll**: Retrieve all family-plant relationships.
- **GET /api/FamilyPlant/GetById**: Retrieve a specific family-plant relationship by ID.
- **POST /api/FamilyPlant/add**: Add a new family-plant relationship.
- **DELETE /api/FamilyPlant/Delete**: Delete a family-plant relationship by ID.
- **PUT /api/FamilyPlant/Update**: Update an existing family-plant relationship by ID.

### FloweringSeasonPlant
- **GET /api/FloweringSeasonPlant/GetAll**: Retrieve all flowering season-plant relationships.
- **GET /api/FloweringSeasonPlant/GetById**: Retrieve a specific flowering season-plant relationship by ID.
- **POST /api/FloweringSeasonPlant/add**: Add a new flowering season-plant relationship.
- **DELETE /api/FloweringSeasonPlant/Delete**: Delete a flowering season-plant relationship by ID.
- **PUT /api/FloweringSeasonPlant/Update**: Update an existing flowering season-plant relationship by ID.

### Origin
- **GET /api/Origin/GetAll**: Retrieve all origins.
- **GET /api/Origin/GetById**: Retrieve an origin by its ID.
- **POST /api/Origin/add**: Add a new origin.
- **DELETE /api/Origin/Delete**: Delete an origin by ID.
- **PUT /api/Origin/Update**: Update an existing origin by ID.

### Photo
- **GET /api/Photo/GetAll**: Retrieve all photos.
- **GET /api/Photo/GetById**: Retrieve a photo by its ID.
- **POST /api/Photo/add**: Add a new photo.
- **DELETE /api/Photo/Delete**: Delete a photo by ID.
- **PUT /api/Photo/Update**: Update an existing photo by ID.

### Plant
- **GET /api/Plant/GetAll**: Retrieve all plants.
- **GET /api/Plant/GetById**: Retrieve a plant by its ID.
- **POST /api/Plant/add**: Add a new plant.
- **DELETE /api/Plant/Delete**: Delete a plant by ID.
- **PUT /api/Plant/Update**: Update an existing plant by ID.

### Source
- **GET /api/Source/GetAll**: Retrieve all sources.
- **GET /api/Source/GetById**: Retrieve a source by its ID.
- **POST /api/Source/add**: Add a new source.
- **DELETE /api/Source/Delete**: Delete a source by ID.
- **PUT /api/Source/Update**: Update an existing source by ID.

### TypeSeason
- **GET /api/TypeSeason/GetAll**: Retrieve all type seasons.
- **GET /api/TypeSeason/GetById**: Retrieve a type season by its ID.
- **POST /api/TypeSeason/add**: Add a new type season.
- **DELETE /api/TypeSeason/Delete**: Delete a type season by ID.
- **PUT /api/TypeSeason/Update**: Update an existing type season by ID.

## Data Models

### CreateClimateDTO
- `plantId` (integer, nullable)
- `name` (string, nullable)
- `description` (string, nullable)
- `temperatureMin` (double, nullable)
- `temperatureMax` (double, nullable)
- `precipitationMin` (double, nullable)
- `precipitationMax` (double, nullable)

### CreateCountryDTO
- `name` (string, nullable)

### CreateFamilyDTO
- `name` (string, nullable)

### CreateFamilyPlantDTO
- `plantId` (integer, nullable)
- `familyId` (integer, nullable)

### CreateFloweringSeasonPlantDTO
- `plantId` (integer, nullable)
- `typeSeasonId` (integer, nullable)

### CreateOriginDTO
- `plantId` (integer, nullable)
- `countryId` (integer, nullable)
- `years` (integer, nullable)

### CreatePhotoDTO
- `plantId` (integer, nullable)
- `url` (string, nullable)
- `author` (string, nullable)

### CreatePlantDTO
- `scientificName` (string, nullable)
- `commonName` (string, nullable)
- `description` (string, nullable)

### CreateSourceDTO
- `title` (string, nullable)
- `url` (string, nullable)
- `author` (string, nullable)

### CreateTypeSeasonDTO
- `name` (string, nullable)

## License
Version: 1.0

