import client from './client';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getCategories() {
  const results = await client.fetch(
    `*[ _type == "category"] | order(_createdAt asc) {
      _id,
      title,
      'slug': slug.current,
    }`,
  );
  return results;
}

export async function getCategory(category) {
  const results = await client.fetch(
    `*[ _type == "category" && slug.current == $category] {
      _id,
      title,
    }`,
    {category},
  );
  return results;
}

export async function getSubCategoryByCategory(category) {
  const results = await client.fetch(
      `*[ _type == "subcategory" && $category in categories[]->slug.current] | order(title asc) {
        _id,
        title,
        'slug': slug.current,
      }`,
      {category},
  );
  return results;
}

export async function getSubCategories() {
  const results = await client.fetch(
    `*[ _type == "subcategory" && parents != null] | order(_createdAt asc) {
      _id,
      title,
      'slug': slug.current,
    }`,
  );
  return results;
}

export async function getSubCategory(subcategory) {
  const results = await client.fetch(
    `*[ _type == "subcategory" && slug.current == $subcategory] {
      _id,
      title,
    }`,
    {subcategory},
  );
  return results;
}

export async function getProducts() {
  const results = await client.fetch(
    `*[ _type == "product"] | order(_createdAt asc) {
      _id,
      title,
      'slug': slug.current,
      "category": category->slug.current,
    }`,
  );
  return results;
}

export async function getProductsByCategory(category) {
  const results = await client.fetch(
      `*[ _type == "product" && $category in categories[]->slug.current] | order(title asc) {
        _id,
        title,
        'slug': slug.current,
      }`,
      {category},
  );
  return results;
}

export async function getProductsBySubCategory(subcategory) {
  const results = await client.fetch(
      `*[ _type == "product" && $subcategory in subcategories[]->slug.current] | order(title asc) {
        _id,
        title,
        'slug': slug.current,
      }`,
      {subcategory},
  );
  return results;
}

export async function getProduct(product) {
  const results = await client.fetch(
    `*[ _type == "product" && slug.current == $product] {
      _id,
      title,
    }`,
    {product},
  );
  return results;
}