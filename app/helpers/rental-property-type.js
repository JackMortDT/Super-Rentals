import { helper } from '@ember/component/helper';

const communityPrpertyTypes=[
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]){
  if(communityPrpertyTypes.includes(propertyType)){
    return 'Community';
  }

  return 'Standalone';
}

export default helper(rentalPropertyType);
