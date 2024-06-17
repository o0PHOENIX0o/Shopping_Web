
from PIL import Image
import pillow_avif

import os

folder = 'new/womens/'

input_dir =  f'C:/Users/User/Desktop/Shopping_Fever/Shopping_fever/assets/images/{folder}'
output_dir = f'C:/Users/User/Desktop/Shopping_Fever/Shopping_fever/assets/images/{folder}'

# ImgType = 'avif'
# sliceLength = -5

ImgType = 'jpeg'
sliceLength = -5

# ImgType = 'jpg'
# sliceLength = -4

# i=0

for filename in os.listdir(input_dir):
    # if filename.endswith('.jpg'):
    if filename.endswith(f'.{ImgType}'):
        print(filename,'\n',filename[:sliceLength])

        img = Image.open(os.path.join(input_dir,filename))

        img.save(os.path.join(output_dir,f'product-{filename[:sliceLength]}.jpeg'))

        os.unlink(os.path.join(input_dir,f'{filename[:sliceLength]}.{ImgType}'))


