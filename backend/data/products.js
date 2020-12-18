const products = [
  {
    name: 'Jacket 1',
    image: '/images/jackets/Jacket1.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Jacket',
    price: 189.95,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Jacket 2',
    image: '/images/jackets/Jacket2.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Jacket',
    price: 239.50,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Jacket 3',
    image: '/images/jackets/Jacket3.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Jacket',
    price: 99.95,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Jacket 4',
    image: '/images/jackets/Jacket4.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Jacket',
    price: 199.95,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Jacket 5',
    image: '/images/jackets/Jacket5.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi. ',
    category: 'Jacket',
    price: 149.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Gloves',
    image: '/images/gloves/glovesyellow.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Gloves',
    price: 49.95,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Pants',
    image: '/images/pants/Pantsblack.jpg',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Pants',
    price: 89.95,
    countInStock: 10,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Bike Sticker/Patch',
    image: '/images/accessories/Bike.png',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Blazing Wheel Sticker/Patch',
    image: '/images/accessories/Blazing_wheel.png',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Diagonal Bike Sticker/Patch',
    image: '/images/accessories/Diagonal_bike.png',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },

  {
    name: 'Blazing Heart Sticker/Patch',
    image: '/images/accessories/Heart.png',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Skull Sticker/Patch',
    image: '/images/accessories/Skull_helmet.png',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Wave Sticker/Patch',
    image: '/images/accessories/Wave.png',
    description:
      'Kushiban daala maul sabé whill. Bane yuzzum ishi amanin. Greedo jerec wicket karrde bane vor. Sarn ysanne mustafar tusken raider nar cornelius ken ig-88. Draethos charal soontir adi. Hapan mothma sith hutt qu. Zuggs mon taung tc-14 aqualish nelvaanian. Talortai trioculus rahm ig-88 massassi.',
    category: 'Accessories',
    price: 9.95,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default products