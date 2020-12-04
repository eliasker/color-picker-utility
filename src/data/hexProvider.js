const hexCodes = [{ name: 'Alice Blue', code: '#F0F8FF' },
{ name: 'Antique White', code: '#FAEBD7' },
{ name: 'Aquamarine', code: '#7FFFD4' },
{ name: 'Azure', code: '#F0FFFF' },
{ name: 'Beige', code: '#F5F5DC' },
{ name: 'Bisque', code: '#FFE4C4' },
{ name: 'Black', code: '#000000' },
{ name: 'Blanched Almond', code: '#FFEBCD' },
{ name: 'Blue', code: '#0000FF' },
{ name: 'Blue Violet', code: '#8A2BE2' },
{ name: 'Brown', code: '#A52A2A' },
{ name: 'Burlywood', code: '#DEB887' },
{ name: 'Cadet Blue', code: '#5F9EA0' },
{ name: 'Chartreuse', code: '#7FFF00' },
{ name: 'Chocolate', code: '#D2691E' },
{ name: 'Coral', code: '#FF7F50' },
{ name: 'Cornflower Blue', code: '#6495ED' },
{ name: 'Cornsilk', code: '#FFF8DC' },
{ name: 'Crimson', code: '#DC143C' },
{ name: 'Cyan', code: '#00FFFF' },
{ name: 'Dark Blue', code: '#00008B' },
{ name: 'Dark Cyan', code: '#008B8B' },
{ name: 'Dark Goldenrod', code: '#B8860B' },
{ name: 'Dark Grey', code: '#A9A9A9' },
{ name: 'Dark Green', code: '#006400' },
{ name: 'Dark Khaki', code: '#BDB76B' },
{ name: 'Dark Magenta', code: '#8B008B' },
{ name: 'Dark Olive Green', code: '#556B2F' },
{ name: 'Dark Orange', code: '#FF8C00' },
{ name: 'Dark Orchid', code: '#9932CC' },
{ name: 'Dark Red', code: '#8B0000' },
{ name: 'Dark Salmon', code: '#E9967A' },
{ name: 'Dark Sea Green', code: '#8FBC8F' },
{ name: 'Dark Slate Blue', code: '#483D8B' },
{ name: 'Dark Slate Grey', code: '#2F4F4F' },
{ name: 'Dark Turquoise', code: '#00CED1' },
{ name: 'Dark Violet', code: '#9400D3' },
{ name: 'Deep Pink', code: '#FF1493' },
{ name: 'Deep Sky Blue', code: '#00BFFF' },
{ name: 'Dim Grey', code: '#696969' },
{ name: 'Dodger Blue', code: '#1E90FF' },
{ name: 'Firebrick', code: '#B22222' },
{ name: 'Floral White', code: '#FFFAF0' },
{ name: 'Forest Green', code: '#228B22' },
{ name: 'Gainsboro', code: '#DCDCDC' },
{ name: 'Ghost White', code: '#F8F8FF' },
{ name: 'Gold', code: '#FFD700' },
{ name: 'Goldenrod', code: '#DAA520' },
{ name: 'Grey', code: '#BEBEBE' },
{ name: 'Web Grey', code: '#808080' },
{ name: 'Lime', code: '#00FF00' },
{ name: 'Web Green', code: '#008000' },
{ name: 'Green Yellow', code: '#ADFF2F' },
{ name: 'Honeydew', code: '#F0FFF0' },
{ name: 'Hot Pink', code: '#FF69B4' },
{ name: 'Indian Red', code: '#CD5C5C' },
{ name: 'Indigo', code: '#4B0082' },
{ name: 'Ivory', code: '#FFFFF0' },
{ name: 'Khaki', code: '#F0E68C' },
{ name: 'Lavender', code: '#E6E6FA' },
{ name: 'Lavender Blush', code: '#FFF0F5' },
{ name: 'Lawn Green', code: '#7CFC00' },
{ name: 'Lemon Chiffon', code: '#FFFACD' },
{ name: 'Light Blue', code: '#ADD8E6' },
{ name: 'Light Coral', code: '#F08080' },
{ name: 'Light Cyan', code: '#E0FFFF' },
{ name: 'Light Goldenrod', code: '#FAFAD2' },
{ name: 'Light Grey', code: '#D3D3D3' },
{ name: 'Light Green', code: '#90EE90' },
{ name: 'Light Pink', code: '#FFB6C1' },
{ name: 'Light Salmon', code: '#FFA07A' },
{ name: 'Light Sea Green', code: '#20B2AA' },
{ name: 'Light Sky Blue', code: '#87CEFA' },
{ name: 'Light Slate Grey', code: '#778899' },
{ name: 'Light Steel Blue', code: '#B0C4DE' },
{ name: 'Light Yellow', code: '#FFFFE0' },
{ name: 'Lime Green', code: '#32CD32' },
{ name: 'Linen', code: '#FAF0E6' },
{ name: 'Magenta', code: '#FF00FF' },
{ name: 'Maroon', code: '#B03060' },
{ name: 'Web Maroon', code: '#800000' },
{ name: 'Medium Aquamarine', code: '#66CDAA' },
{ name: 'Medium Blue', code: '#0000CD' },
{ name: 'Medium Orchid', code: '#BA55D3' },
{ name: 'Medium Purple', code: '#9370DB' },
{ name: 'Medium Sea Green', code: '#3CB371' },
{ name: 'Medium Slate Blue', code: '#7B68EE' },
{ name: 'Medium Spring Green', code: '#00FA9A' },
{ name: 'Medium Turquoise', code: '#48D1CC' },
{ name: 'Medium Violet Red', code: '#C71585' },
{ name: 'Midnight Blue', code: '#191970' },
{ name: 'Mint Cream', code: '#F5FFFA' },
{ name: 'Misty Rose', code: '#FFE4E1' },
{ name: 'Moccasin', code: '#FFE4B5' },
{ name: 'Navajo White', code: '#FFDEAD' },
{ name: 'Navy Blue', code: '#000080' },
{ name: 'Old Lace', code: '#FDF5E6' },
{ name: 'Olive', code: '#808000' },
{ name: 'Olive Drab', code: '#6B8E23' },
{ name: 'Orange', code: '#FFA500' },
{ name: 'Orange Red', code: '#FF4500' },
{ name: 'Orchid', code: '#DA70D6' },
{ name: 'Pale Goldenrod', code: '#EEE8AA' },
{ name: 'Pale Green', code: '#98FB98' },
{ name: 'Pale Turquoise', code: '#AFEEEE' },
{ name: 'Pale Violet Red', code: '#DB7093' },
{ name: 'Papaya Whip', code: '#FFEFD5' },
{ name: 'Peach Puff', code: '#FFDAB9' },
{ name: 'Peru', code: '#CD853F' },
{ name: 'Pink', code: '#FFC0CB' },
{ name: 'Plum', code: '#DDA0DD' },
{ name: 'Powder Blue', code: '#B0E0E6' },
{ name: 'Purple', code: '#A020F0' },
{ name: 'Web Purple', code: '#800080' },
{ name: 'Rebecca Purple', code: '#663399' },
{ name: 'Red', code: '#FF0000' },
{ name: 'Rosy Brown', code: '#BC8F8F' },
{ name: 'Royal Blue', code: '#4169E1' },
{ name: 'Saddle Brown', code: '#8B4513' },
{ name: 'Salmon', code: '#FA8072' },
{ name: 'Sandy Brown', code: '#F4A460' },
{ name: 'Sea Green', code: '#2E8B57' },
{ name: 'Seashell', code: '#FFF5EE' },
{ name: 'Sienna', code: '#A0522D' },
{ name: 'Silver', code: '#C0C0C0' },
{ name: 'Sky Blue', code: '#87CEEB' },
{ name: 'Slate Blue', code: '#6A5ACD' },
{ name: 'Slate Grey', code: '#708090' },
{ name: 'Snow', code: '#FFFAFA' },
{ name: 'Spring Green', code: '#00FF7F' },
{ name: 'Steel Blue', code: '#4682B4' },
{ name: 'Tan', code: '#D2B48C' },
{ name: 'Teal', code: '#008080' },
{ name: 'Thistle', code: '#D8BFD8' },
{ name: 'Tomato', code: '#FF6347' },
{ name: 'Turquoise', code: '#40E0D0' },
{ name: 'Violet', code: '#EE82EE' },
{ name: 'Wheat', code: '#F5DEB3' },
{ name: 'White', code: '#FFFFFF' },
{ name: 'White Smoke', code: '#F5F5F5' },
{ name: 'Yellow', code: '#FFFF00' },
{ name: 'Yellow Green', code: '#9ACD32' }]

export default hexCodes
