require('dotenv').config();
const { strict } = require('assert');
const contentfulManagement = require('contentful-management');
const assert = strict;

const {
  NEXT_CONTENTFUL_TYPES_ACCESS_TOKEN,
  NEXT_CONTENTFUL_SPACE,
  NEXT_ENVIRONMENT,
} = process.env;

assert(NEXT_CONTENTFUL_TYPES_ACCESS_TOKEN);
assert(NEXT_CONTENTFUL_SPACE);
assert(NEXT_ENVIRONMENT);

const getContentfulEnvironment = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: NEXT_CONTENTFUL_TYPES_ACCESS_TOKEN!,
  });

  return contentfulClient
    .getSpace(NEXT_CONTENTFUL_SPACE!)
    .then((space: any) => space.getEnvironment(NEXT_ENVIRONMENT!));
};

module.exports = getContentfulEnvironment;
