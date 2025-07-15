import { RestaurantInterface } from '@/interfaces/restaurant';

export const mockRestaurants: RestaurantInterface[] = [
  {
    id: 1,
    name: 'Matsuri Concept',
    rating: 4.7,
    image: '/images/matsuri.png',
    deliveryFee: 0,
    minimumOrderPrice: 15,
    estimatedDeliveryTime: { min: 30, max: 40 },
    distance: 5.2,
    closingTime: '20:00',
    openingTime: '18:00',
    isOpen: true,
    maxValueDeliveryFee: 0,
    promotionRestaurant: true,
    category: 'japones',
    categories: [
      {
        id: 'ceviches',
        name: 'Ceviches',
        description: 'um prato super refrescante de peixe fatiado e marinado com limão',
        hasPromotions: true,
        products: [
          {
            id: 'ceviche-salmao',
            name: 'Ceviche de salmão',
            description: 'salmão temperado com limão, cebola e pimenta',
            image: '/images/products/ceviche-salmao.png',
            basePrice: 19.9,
            price: 10.9,
            hasPromotions: true,
            multiplePrices: true,
            type: 'gluten',
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                required: true,
                title: 'qual o tamanho?',
                subtitle: 'escolha 1',
                options: [
                  {
                    id: 'medio',
                    label: 'médio',
                    price: 10.9,
                    basePrice: 19.9,
                    hasPromotions: true,
                    defaultChecked: 'medio'
                  },
                  {
                    id: 'grande',
                    label: 'grande',
                    price: 28.9
                  }
                ]
              },
              {
                id: 'acompanhamentos',
                type: 'multiple',
                subtitle: 'escolha de 1 a 2',
                required: true,
                min: 1,
                max: 2,
                title: 'acompanhamentos',
                options: [
                  {
                    id: 'shoyu',
                    label: 'shoyu',
                    price: 0
                  },
                  {
                    id: 'gengibre',
                    label: 'gengibre',
                    price: 0
                  },
                  {
                    id: 'wasabi',
                    label: 'wasabi',
                    price: 0
                  },
                  {
                    id: 'sem',
                    label: 'sem acompanhamentos',
                    price: 0
                  }
                ]
              },
              {
                id: 'bebida',
                type: 'quantity',
                required: false,
                title: 'vai querer bebida?',
                options: [
                  {
                    id: 'coca',
                    label: 'coca-cola',
                    price: 5
                  },
                  {
                    id: 'fanta',
                    label: 'fanta laranja',
                    price: 5
                  },
                  {
                    id: 'guarana',
                    label: 'guaraná antarctica',
                    price: 5
                  },
                  {
                    id: 'suco',
                    label: 'suco prats laranja',
                    price: 6
                  },
                  {
                    id: 'agua',
                    label: 'água sem gás',
                    price: 3
                  }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                required: false,
                subtitle: 'escolha até 1',
                title: 'precisa de talher?',
                options: [
                  {
                    id: 'hashi',
                    label: 'hashi',
                    defaultChecked: 'hashi',
                    price: 0
                  },
                  {
                    id: 'descartavel',
                    label: 'garfo e faca descartável',
                    price: 1
                  }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                required: false,
                max: 2,
                title: 'mais alguma coisa?',
                subtitle: 'escolha até 2',
                options: [
                  {
                    id: 'biscoito',
                    label: 'biscoito da sorte',
                    price: 2
                  },
                  {
                    id: 'rolinho',
                    label: 'rolinho primavera',
                    price: 8
                  },
                  {
                    id: 'guioza',
                    label: 'guioza',
                    price: 6
                  }
                ]
              }
            ]
          },
          {
            id: 'ceviche-vegano',
            name: 'Ceviche vegano',
            description: 'Pepino, manga, cenoura e cebola roxa no limão com pimenta dedo-de-moça',
            image: '/images/products/ceviche-vegano.png',
            basePrice: 18,
            price: 18,
            hasPromotions: false,
            multiplePrices: false,
            type: 'vegan',
            customizations: [
              {
                id: 'proteina',
                type: 'single',
                required: false,
                title: 'Adicionar proteína?',
                options: [
                  {
                    id: 'tofu',
                    label: 'Tofu grelhado',
                    price: 4
                  },
                  {
                    id: 'nenhum',
                    label: 'Não adicionar',
                    price: 0,
                    defaultChecked: 'nenhum'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'niguiris',
        name: 'Niguiris',
        description: 'fatias de peixe sobre bolinhos de arroz',
        hasPromotions: false,
        products: [
          {
            id: 'niguiri-salmao',
            name: 'Niguiri de Salmão',
            description: 'Fatia de salmão fresco sobre bolinho de arroz temperado',
            image: '/images/products/nigiri-salmao.png',
            basePrice: 9.9,
            price: 9.9,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Deseja molho?',
                required: false,
                options: [
                  {
                    id: 'shoyu',
                    label: 'Shoyu',
                    price: 0
                  },
                  {
                    id: 'teriyaki',
                    label: 'Molho Teriyaki',
                    price: 1
                  },
                  {
                    id: 'sem-molho',
                    label: 'Sem molho',
                    price: 0,
                    defaultChecked: 'sem-molho'
                  }
                ]
              },
              {
                id: 'acompanhamentos',
                type: 'multiple',
                title: 'Acompanhamentos',
                required: false,
                max: 2,
                subtitle: 'Escolha até 2',
                options: [
                  {
                    id: 'wasabi',
                    label: 'Wasabi',
                    price: 0
                  },
                  {
                    id: 'gengibre',
                    label: 'Gengibre',
                    price: 0
                  },
                  {
                    id: 'sunomono',
                    label: 'Sunomono',
                    price: 2
                  }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  {
                    id: 'hashi',
                    label: 'Hashi',
                    defaultChecked: 'hashi',
                    price: 0
                  },
                  {
                    id: 'descartavel',
                    label: 'Garfo e faca descartável',
                    price: 1
                  }
                ]
              }
            ]
          },
          {
            id: 'niguiri-atum',
            name: 'Niguiri de Atum',
            description: 'Fatia de atum fresco sobre bolinho de arroz',
            image: '/images/products/nigiri-atum.png',
            basePrice: 10.9,
            price: 10.9,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Deseja molho?',
                required: false,
                options: [
                  {
                    id: 'shoyu',
                    label: 'Shoyu',
                    price: 0
                  },
                  {
                    id: 'picante',
                    label: 'Molho picante',
                    price: 1
                  },
                  {
                    id: 'sem-molho',
                    label: 'Sem molho',
                    price: 0,
                    defaultChecked: 'sem-molho'
                  }
                ]
              },
              {
                id: 'acompanhamentos',
                type: 'multiple',
                title: 'Acompanhamentos',
                required: false,
                max: 2,
                subtitle: 'Escolha até 2',
                options: [
                  {
                    id: 'wasabi',
                    label: 'Wasabi',
                    price: 0
                  },
                  {
                    id: 'gengibre',
                    label: 'Gengibre',
                    price: 0
                  },
                  {
                    id: 'salada',
                    label: 'Salada de pepino',
                    price: 2
                  }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  {
                    id: 'hashi',
                    label: 'Hashi',
                    defaultChecked: 'hashi',
                    price: 0
                  },
                  {
                    id: 'descartavel',
                    label: 'Garfo e faca descartável',
                    price: 1
                  }
                ]
              }
            ]
          },
          {
            id: 'niguiri-ovo',
            name: 'Niguiri de Ovo',
            description: 'Ovo japonês levemente adocicado sobre arroz tradicional',
            image: '/images/products/nigiri-ovo.png',
            basePrice: 7,
            price: 7,
            hasPromotions: false,
            multiplePrices: false,
            type: 'candy',
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Deseja molho?',
                required: false,
                options: [
                  {
                    id: 'shoyu-doce',
                    label: 'Shoyu doce',
                    price: 0
                  },
                  {
                    id: 'sem-molho',
                    label: 'Sem molho',
                    price: 0,
                    defaultChecked: 'sem-molho'
                  }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  {
                    id: 'hashi',
                    label: 'Hashi',
                    defaultChecked: 'hashi',
                    price: 0
                  },
                  {
                    id: 'descartavel',
                    label: 'Garfo e faca descartável',
                    price: 1
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'temakis',
        name: 'Temakis',
        description: 'sushi em forma de cone com salmão e cream cheese',
        hasPromotions: true,
        products: [
          {
            id: 'temaki-california',
            name: 'Califórnia',
            description: 'Kani, pepino e maçã ou manga',
            image: '/images/products/temaki-california.png',
            price: 13.99,
            basePrice: 17,
            hasPromotions: true,
            multiplePrices: false,
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                required: false,
                title: 'Qual o tamanho?',
                options: [
                  {
                    id: 'normal',
                    label: 'Normal',
                    price: 0,
                    defaultChecked: 'normal'
                  },
                  {
                    id: 'grande',
                    label: 'Grande',
                    price: 4
                  }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                title: 'Adicionar extras?',
                subtitle: 'Escolha até 2',
                max: 2,
                required: false,
                options: [
                  {
                    id: 'cream-cheese',
                    label: 'Cream cheese extra',
                    price: 2
                  },
                  {
                    id: 'shimeji',
                    label: 'Shimeji',
                    price: 3
                  },
                  {
                    id: 'cebolinha',
                    label: 'Cebolinha',
                    price: 1
                  }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  {
                    id: 'hashi',
                    label: 'Hashi',
                    defaultChecked: 'hashi',
                    price: 0
                  },
                  {
                    id: 'descartavel',
                    label: 'Garfo e faca descartável',
                    price: 1
                  }
                ]
              }
            ]
          },
          {
            id: 'temaki-filadelfia',
            name: 'Filadélfia',
            basePrice: 13.99,
            description: 'Arroz, salmão fresco, cream cheese e cebolinha',
            image: '/images/products/temaki-philadelphia.png',
            price: 13.99,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                required: false,
                title: 'Qual o tamanho?',
                options: [
                  {
                    id: 'normal',
                    label: 'Normal',
                    price: 13.99,
                    defaultChecked: 'normal'
                  },
                  {
                    id: 'grande',
                    label: 'Grande',
                    price: 20.99
                  }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                title: 'Adicionar extras?',
                subtitle: 'Escolha até 2',
                max: 2,
                required: false,
                options: [
                  {
                    id: 'cream-cheese',
                    label: 'Cream cheese extra',
                    price: 2
                  },
                  {
                    id: 'cebolinha',
                    label: 'Cebolinha extra',
                    price: 1
                  }
                ]
              }
            ]
          },
          {
            id: 'temaki-mix',
            name: 'Mix',
            description:
              'Escolha 3 ingredientes: shimeji, alface americana, rúcula, pepino, tomate seco, cream cheese, maionese...',
            image: '/images/products/temaki-mix.png',
            price: 24.99,
            hasPromotions: false,
            multiplePrices: true,
            basePrice: 24.99,
            customizations: [
              {
                id: 'ingredientes',
                type: 'multiple',
                title: 'Escolha os ingredientes',
                subtitle: 'Escolha até 3',
                required: true,
                max: 3,
                options: [
                  {
                    id: 'shimeji',
                    label: 'Shimeji',
                    price: 0
                  },
                  {
                    id: 'alface',
                    label: 'Alface americana',
                    price: 0
                  },
                  {
                    id: 'rucula',
                    label: 'Rúcula',
                    price: 0
                  },
                  {
                    id: 'pepino',
                    label: 'Pepino',
                    price: 0
                  },
                  {
                    id: 'tomate',
                    label: 'Tomate seco',
                    price: 0
                  },
                  {
                    id: 'cream-cheese',
                    label: 'Cream cheese',
                    price: 0
                  },
                  {
                    id: 'maionese',
                    label: 'Maionese',
                    price: 0
                  }
                ]
              }
            ]
          },
          {
            id: 'temaki-salmao-picante',
            name: 'Salmão picante',
            description: 'Alga, arroz, salmão fresco, pimenta e cebolinha',
            image: '/images/products/temaki-salmao.png',
            price: 13.99,
            hasPromotions: false,
            basePrice: 13.99,
            multiplePrices: true,
            type: 'spicy',
            customizations: [
              {
                id: 'nivel-picancia',
                type: 'single',
                title: 'Nível de picância',
                required: true,
                options: [
                  {
                    id: 'leve',
                    label: 'Leve',
                    price: 0,
                    defaultChecked: 'leve'
                  },
                  {
                    id: 'medio',
                    label: 'Médio',
                    price: 0
                  },
                  {
                    id: 'forte',
                    label: 'Forte',
                    price: 0
                  }
                ]
              },
              {
                id: 'tamanho',
                type: 'single',
                title: 'Qual o tamanho?',
                required: false,
                options: [
                  {
                    id: 'normal',
                    label: 'Normal',
                    price: 0,
                    defaultChecked: 'normal'
                  },
                  {
                    id: 'grande',
                    label: 'Grande',
                    price: 4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'bebidas',
        name: 'Bebidas',
        description: 'Bebidas para acompanhar seu prato',
        products: [
          {
            id: 'agua-sem-gas',
            name: 'Água Sem Gás',
            description: 'Garrafa 500ml',
            image: '/images/products/agua.png',
            basePrice: 3,
            price: 3,
            hasPromotions: false,
            multiplePrices: false,
            customizations: []
          },
          {
            id: 'agua-com-gas',
            name: 'Água Com Gás',
            description: 'Garrafa 500ml',
            image: '/images/products/agua.png',
            basePrice: 3.5,
            price: 3.5,
            hasPromotions: false,
            multiplePrices: false,
            customizations: []
          },
          {
            id: 'coca-lata',
            name: 'Coca-Cola Lata',
            description: '350ml',
            image: '/images/products/coca-cola.png',
            basePrice: 6,
            price: 6,
            hasPromotions: false,
            multiplePrices: false,
            customizations: []
          },
          {
            id: 'guarana-lata',
            name: 'Guaraná Antarctica Lata',
            description: '350ml',
            image: '/images/products/guarana.png',
            basePrice: 6,
            price: 6,
            hasPromotions: false,
            multiplePrices: false,
            customizations: []
          }
        ]
      },
      {
        id: 'sobremesas',
        name: 'Sobremesas',
        description: 'Doces japoneses e sobremesas geladas',
        hasPromotions: true,
        products: [
          {
            id: 'biscoito-da-sorte',
            name: 'Biscoito da Sorte',
            description: 'Biscoito crocante com mensagem personalizada',
            image: '/images/products/biscoito-sorte.png',
            basePrice: 2,
            price: 2,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [],
            type: 'candy'
          },
          {
            id: 'rolinho-primavera-doce',
            name: 'Rolinho Primavera Doce',
            description: 'Massa crocante recheada com banana e canela',
            image: '/images/products/rolinho.png',
            basePrice: 8,
            price: 8,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [],
            type: 'candy'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Subway Avenida Center',
    rating: 4.4,
    image: '/images/subway.png',
    deliveryFee: 6,
    minimumOrderPrice: 32,
    estimatedDeliveryTime: { min: 40, max: 50 },
    distance: 28,
    closingTime: '23:59',
    openingTime: '18:00',
    isOpen: true,
    maxValueDeliveryFee: 0,
    promotionRestaurant: false,
    category: 'lanches',
    categories: [
      {
        id: 'subway',
        name: 'Subway',
        description: 'Monte seu sanduíche do seu jeito',
        hasPromotions: true,
        products: [
          {
            id: 'sub-frango',
            name: 'Frango Grelhado',
            description: 'Sanduíche com frango grelhado, vegetais frescos e molho à escolha',
            image: '/images/products/subway-frango.png',
            basePrice: 22.9,
            price: 19.9,
            hasPromotions: true,
            multiplePrices: true,
            type: 'gluten',
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                title: 'Qual o tamanho?',
                required: true,
                subtitle: 'Escolha 1',
                options: [
                  { id: '15cm', label: '15 cm', price: 0, defaultChecked: '15cm' },
                  { id: '30cm', label: '30 cm', price: 10 }
                ]
              },
              {
                id: 'pao',
                type: 'single',
                title: 'Escolha o pão',
                required: true,
                options: [
                  { id: 'italiano', label: 'Italiano Branco', price: 0 },
                  { id: 'integral', label: 'Integral', price: 0 },
                  { id: 'parmesao', label: 'Parmesão e Orégano', price: 1 }
                ]
              },
              {
                id: 'vegetais',
                type: 'multiple',
                title: 'Vegetais',
                subtitle: 'Escolha os vegetais',
                required: false,
                options: [
                  { id: 'alface', label: 'Alface', price: 0 },
                  { id: 'tomate', label: 'Tomate', price: 0 },
                  { id: 'picles', label: 'Picles', price: 0 },
                  { id: 'cebola-roxa', label: 'Cebola Roxa', price: 0 }
                ]
              },
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho',
                required: true,
                options: [
                  { id: 'maionese', label: 'Maionese', price: 0 },
                  { id: 'chipotle', label: 'Chipotle', price: 0 },
                  { id: 'barbecue', label: 'Barbecue', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                title: 'Adicionais',
                subtitle: 'Até 2 itens',
                max: 2,
                required: false,
                options: [
                  { id: 'queijo', label: 'Queijo Extra', price: 2 },
                  { id: 'bacon', label: 'Bacon', price: 3 },
                  { id: 'pepperoni', label: 'Pepperoni', price: 2 }
                ]
              }
            ]
          },
          {
            id: 'sub-vegetariano',
            name: 'Vegetariano',
            description: 'Sanduíche recheado apenas com vegetais frescos e molho',
            image: '/images/products/sub-vegetariano.png',
            basePrice: 18.9,
            price: 18.9,
            hasPromotions: false,
            multiplePrices: false,
            type: 'vegan',
            customizations: [
              {
                id: 'pao',
                type: 'single',
                title: 'Escolha o pão',
                required: true,
                options: [
                  { id: 'italiano', label: 'Italiano Branco', price: 0 },
                  { id: 'integral', label: 'Integral', price: 0 },
                  { id: 'parmesao', label: 'Parmesão e Orégano', price: 1 }
                ]
              },
              {
                id: 'vegetais',
                type: 'multiple',
                title: 'Vegetais',
                subtitle: 'Escolha os vegetais',
                required: true,
                options: [
                  { id: 'alface', label: 'Alface', price: 0 },
                  { id: 'tomate', label: 'Tomate', price: 0 },
                  { id: 'cebola', label: 'Cebola', price: 0 },
                  { id: 'pimentao', label: 'Pimentão', price: 0 }
                ]
              },
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho',
                required: false,
                options: [
                  { id: 'maionese', label: 'Maionese', price: 0 },
                  { id: 'mostarda', label: 'Mostarda', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Burger King Colombo',
    rating: 5,
    image: '/images/burguerking.png',
    deliveryFee: 6,
    minimumOrderPrice: 32,
    estimatedDeliveryTime: { min: 60, max: 70 },
    distance: 12,
    closingTime: '23:59',
    openingTime: '18:00',
    isOpen: true,
    maxValueDeliveryFee: 0,
    promotionRestaurant: true,
    category: 'lanches',
    categories: [
      {
        id: 'burger-king',
        name: 'Burger King',
        description: 'Clássicos grelhados no fogo como churrasco',
        hasPromotions: true,
        products: [
          {
            id: 'whopper',
            name: 'Whopper',
            description: 'Carne bovina grelhada, alface, tomate, cebola, picles e maionese no pão com gergelim',
            image: '/images/products/whopper.png',
            basePrice: 26.9,
            price: 22.9,
            hasPromotions: true,
            multiplePrices: true,
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                title: 'Tamanho do combo',
                required: true,
                options: [
                  { id: 'normal', label: 'Normal', price: 0, defaultChecked: 'normal' },
                  { id: 'duplo', label: 'Duplo', price: 6 }
                ]
              },
              {
                id: 'bebida',
                type: 'single',
                title: 'Escolha a bebida',
                required: true,
                options: [
                  { id: 'coca', label: 'Coca-Cola', price: 0, quantity: 0 },
                  { id: 'fanta', label: 'Fanta', price: 0, quantity: 0 },
                  { id: 'agua', label: 'Água sem gás', price: 0, quantity: 0 }
                ]
              },
              {
                id: 'batata',
                type: 'single',
                title: 'Tipo de batata',
                required: true,
                options: [
                  { id: 'batata-palito', label: 'Palito', price: 0 },
                  { id: 'batata-rustica', label: 'Rústica', price: 2 }
                ]
              },
              {
                id: 'adicionais',
                required: false,
                type: 'multiple',
                title: 'Adicionais',
                max: 2,
                subtitle: 'Escolha até 2',
                options: [
                  { id: 'bacon', label: 'Bacon', price: 3 },
                  { id: 'cheddar', label: 'Cheddar', price: 2 },
                  { id: 'cebola-caramelizada', label: 'Cebola caramelizada', price: 2 }
                ]
              }
            ]
          },
          {
            id: 'bk-chicken',
            name: 'BK Chicken',
            description: 'Filé de frango empanado, maionese, alface e pão com gergelim',
            image: '/images/products/bk-chicken.png',
            basePrice: 21.9,
            price: 21.9,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho extra',
                required: false,
                options: [
                  { id: 'barbecue', label: 'Barbecue', price: 0 },
                  { id: 'ranch', label: 'Ranch', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  { id: 'descartavel', label: 'Garfo e faca descartável', price: 1 },
                  { id: 'nao', label: 'Não preciso', price: 0, defaultChecked: 'nao' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Burger King Colombo',
    rating: 5,
    image: '/images/burguerking.png',
    deliveryFee: 6,
    minimumOrderPrice: 32,
    estimatedDeliveryTime: { min: 60, max: 70 },
    distance: 12,
    closingTime: '23:59',
    openingTime: '18:00',
    isOpen: true,
    maxValueDeliveryFee: 0,
    promotionRestaurant: false,
    category: 'lanches',
    categories: [
      {
        id: 'burger-king',
        name: 'Burger King',
        description: 'Clássicos grelhados no fogo como churrasco',
        hasPromotions: true,
        products: [
          {
            id: 'whopper',
            name: 'Whopper',
            description: 'Carne bovina grelhada, alface, tomate, cebola, picles e maionese no pão com gergelim',
            image: '/images/products/whopper.png',
            basePrice: 26.9,
            price: 22.9,
            hasPromotions: true,
            multiplePrices: true,
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                title: 'Tamanho do combo',
                required: true,
                options: [
                  { id: 'normal', label: 'Normal', price: 0, defaultChecked: 'normal' },
                  { id: 'duplo', label: 'Duplo', price: 6 }
                ]
              },
              {
                id: 'bebida',
                type: 'single',
                title: 'Escolha a bebida',
                required: true,
                options: [
                  { id: 'coca', label: 'Coca-Cola', price: 0 },
                  { id: 'fanta', label: 'Fanta', price: 0 },
                  { id: 'agua', label: 'Água sem gás', price: 0 }
                ]
              },
              {
                id: 'batata',
                type: 'single',
                title: 'Tipo de batata',
                required: true,
                options: [
                  { id: 'batata-palito', label: 'Palito', price: 0 },
                  { id: 'batata-rustica', label: 'Rústica', price: 2 }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                required: false,
                title: 'Adicionais',
                max: 2,
                subtitle: 'Escolha até 2',
                options: [
                  { id: 'bacon', label: 'Bacon', price: 3 },
                  { id: 'cheddar', label: 'Cheddar', price: 2 },
                  { id: 'cebola-caramelizada', label: 'Cebola caramelizada', price: 2 }
                ]
              }
            ]
          },
          {
            id: 'bk-chicken',
            name: 'BK Chicken',
            description: 'Filé de frango empanado, maionese, alface e pão com gergelim',
            image: '/images/products/bk-chicken.png',
            basePrice: 21.9,
            price: 21.9,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho extra',
                required: false,
                options: [
                  { id: 'barbecue', label: 'Barbecue', price: 0 },
                  { id: 'ranch', label: 'Ranch', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  { id: 'descartavel', label: 'Garfo e faca descartável', price: 1 },
                  { id: 'nao', label: 'Não preciso', price: 0, defaultChecked: 'nao' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'McDonalds - Novo centro',
    rating: 4.7,
    image: '/images/mc-donalds.png',
    deliveryFee: 0,
    minimumOrderPrice: 15,
    estimatedDeliveryTime: { min: 30, max: 40 },
    distance: 5.2,
    closingTime: '20:00',
    openingTime: '18:00',
    isOpen: true,
    maxValueDeliveryFee: 0,
    promotionRestaurant: false,
    category: 'lanches',
    categories: [
      {
        id: 'lanches',
        name: 'Lanches',
        description: 'Seus lanches favoritos do 1 ao 10',
        hasPromotions: true,
        products: [
          {
            id: 'big-mac',
            name: 'Big Mac',
            description: '2 hamburgueres alface queijo molho especial salada picles e um pão com gergilin',
            image: '/images/products/bigmac.png',
            basePrice: 19.9,
            price: 10.9,
            hasPromotions: true,
            multiplePrices: true,
            type: 'gluten',
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                required: true,
                title: 'qual o tamanho?',
                subtitle: 'escolha 1',
                options: [
                  {
                    id: 'medio',
                    label: 'médio',
                    price: 10.9,
                    basePrice: 19.9,
                    hasPromotions: true,
                    defaultChecked: 'medio'
                  },
                  {
                    id: 'grande',
                    label: 'grande',
                    price: 18.9
                  }
                ]
              },
              {
                id: 'acompanhamentos',
                type: 'multiple',
                subtitle: 'escolha de 1 a 2',
                required: true,
                min: 1,
                max: 2,
                title: 'acompanhamentos',
                options: [
                  {
                    id: 'batata',
                    label: 'batata',
                    price: 10
                  },
                  {
                    id: 'milk shake',
                    label: 'milk shake',
                    price: 5
                  }
                ]
              },
              {
                id: 'bebida',
                type: 'quantity',
                required: false,
                title: 'vai querer bebida?',
                options: [
                  {
                    id: 'coca',
                    label: 'coca-cola',
                    price: 5
                  },
                  {
                    id: 'fanta',
                    label: 'fanta laranja',
                    price: 5
                  },
                  {
                    id: 'guarana',
                    label: 'guaraná antarctica',
                    price: 5
                  },
                  {
                    id: 'suco',
                    label: 'suco prats laranja',
                    price: 6
                  },
                  {
                    id: 'agua',
                    label: 'água sem gás',
                    price: 3
                  }
                ]
              }
            ]
          },
          {
            id: 'cheddar-mcmelt',
            name: 'Cheddar McMelt',
            description: 'O melhor lanche de bacon, com 2 hamburgueres, e muito cheddar',
            image: '/images/products/cheddar-mc-melt.png',
            basePrice: 18,
            price: 18,
            hasPromotions: false,
            multiplePrices: false,
            type: 'vegan',
            customizations: [
              {
                id: 'proteina',
                type: 'single',
                required: false,
                title: 'Adicionar proteína?',
                options: [
                  {
                    id: 'tofu',
                    label: 'Tofu grelhado',
                    price: 4
                  },
                  {
                    id: 'nenhum',
                    label: 'Não adicionar',
                    price: 0,
                    defaultChecked: 'proteina'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Subway Avenida Center',
    rating: 4.4,
    image: '/images/subway.png',
    deliveryFee: 6,
    minimumOrderPrice: 32,
    estimatedDeliveryTime: { min: 40, max: 50 },
    distance: 28,
    closingTime: '23:59',
    openingTime: '18:00',
    isOpen: false,
    maxValueDeliveryFee: 0,
    promotionRestaurant: true,
    category: 'saudavel',
    categories: [
      {
        id: 'subway',
        name: 'Subway',
        description: 'Monte seu sanduíche do seu jeito',
        hasPromotions: true,
        products: [
          {
            id: 'sub-frango',
            name: 'Frango Grelhado',
            description: 'Sanduíche com frango grelhado, vegetais frescos e molho à escolha',
            image: '/images/products/subway-frango.png',
            basePrice: 22.9,
            price: 19.9,
            hasPromotions: true,
            multiplePrices: true,
            type: 'gluten',
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                title: 'Qual o tamanho?',
                required: true,
                subtitle: 'Escolha 1',
                options: [
                  { id: '15cm', label: '15 cm', price: 0, defaultChecked: '15cm' },
                  { id: '30cm', label: '30 cm', price: 10 }
                ]
              },
              {
                id: 'pao',
                type: 'single',
                title: 'Escolha o pão',
                required: true,
                options: [
                  { id: 'italiano', label: 'Italiano Branco', price: 0 },
                  { id: 'integral', label: 'Integral', price: 0 },
                  { id: 'parmesao', label: 'Parmesão e Orégano', price: 1 }
                ]
              },
              {
                id: 'vegetais',
                type: 'multiple',
                title: 'Vegetais',
                subtitle: 'Escolha os vegetais',
                required: false,
                options: [
                  { id: 'alface', label: 'Alface', price: 0 },
                  { id: 'tomate', label: 'Tomate', price: 0 },
                  { id: 'picles', label: 'Picles', price: 0 },
                  { id: 'cebola-roxa', label: 'Cebola Roxa', price: 0 }
                ]
              },
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho',
                required: true,
                options: [
                  { id: 'maionese', label: 'Maionese', price: 0 },
                  { id: 'chipotle', label: 'Chipotle', price: 0 },
                  { id: 'barbecue', label: 'Barbecue', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                title: 'Adicionais',
                subtitle: 'Até 2 itens',
                max: 2,
                required: false,
                options: [
                  { id: 'queijo', label: 'Queijo Extra', price: 2 },
                  { id: 'bacon', label: 'Bacon', price: 3 },
                  { id: 'pepperoni', label: 'Pepperoni', price: 2 }
                ]
              }
            ]
          },
          {
            id: 'sub-vegetariano',
            name: 'Vegetariano',
            description: 'Sanduíche recheado apenas com vegetais frescos e molho',
            image: '/images/products/sub-vegetariano.png',
            basePrice: 18.9,
            price: 18.9,
            hasPromotions: false,
            multiplePrices: false,
            type: 'vegan',
            customizations: [
              {
                id: 'pao',
                type: 'single',
                title: 'Escolha o pão',
                required: true,
                options: [
                  { id: 'italiano', label: 'Italiano Branco', price: 0 },
                  { id: 'integral', label: 'Integral', price: 0 },
                  { id: 'parmesao', label: 'Parmesão e Orégano', price: 1 }
                ]
              },
              {
                id: 'vegetais',
                type: 'multiple',
                title: 'Vegetais',
                subtitle: 'Escolha os vegetais',
                required: true,
                options: [
                  { id: 'alface', label: 'Alface', price: 0 },
                  { id: 'tomate', label: 'Tomate', price: 0 },
                  { id: 'cebola', label: 'Cebola', price: 0 },
                  { id: 'pimentao', label: 'Pimentão', price: 0 }
                ]
              },
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho',
                required: false,
                options: [
                  { id: 'maionese', label: 'Maionese', price: 0 },
                  { id: 'mostarda', label: 'Mostarda', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Burger King Colombo',
    rating: 5,
    image: '/images/burguerking.png',
    deliveryFee: 6,
    minimumOrderPrice: 32,
    estimatedDeliveryTime: { min: 60, max: 70 },
    distance: 12,
    closingTime: '23:59',
    openingTime: '18:00',
    isOpen: false,
    maxValueDeliveryFee: 0,
    promotionRestaurant: true,
    category: 'lanches',
    categories: [
      {
        id: 'burger-king',
        name: 'Burger King',
        description: 'Clássicos grelhados no fogo como churrasco',
        hasPromotions: true,
        products: [
          {
            id: 'whopper',
            name: 'Whopper',
            description: 'Carne bovina grelhada, alface, tomate, cebola, picles e maionese no pão com gergelim',
            image: '/images/products/whopper.png',
            basePrice: 26.9,
            price: 22.9,
            hasPromotions: true,
            multiplePrices: true,
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                title: 'Tamanho do combo',
                required: true,
                options: [
                  { id: 'normal', label: 'Normal', price: 0, defaultChecked: 'normal' },
                  { id: 'duplo', label: 'Duplo', price: 6 }
                ]
              },
              {
                id: 'bebida',
                type: 'single',
                title: 'Escolha a bebida',
                required: true,
                options: [
                  { id: 'coca', label: 'Coca-Cola', price: 0 },
                  { id: 'fanta', label: 'Fanta', price: 0 },
                  { id: 'agua', label: 'Água sem gás', price: 0 }
                ]
              },
              {
                id: 'batata',
                type: 'single',
                title: 'Tipo de batata',
                required: true,
                options: [
                  { id: 'batata-palito', label: 'Palito', price: 0 },
                  { id: 'batata-rustica', label: 'Rústica', price: 2 }
                ]
              },
              {
                required: true,
                id: 'adicionais',
                type: 'multiple',
                title: 'Adicionais',
                max: 2,
                subtitle: 'Escolha até 2',
                options: [
                  { id: 'bacon', label: 'Bacon', price: 3 },
                  { id: 'cheddar', label: 'Cheddar', price: 2 },
                  { id: 'cebola-caramelizada', label: 'Cebola caramelizada', price: 2 }
                ]
              }
            ]
          },
          {
            id: 'bk-chicken',
            name: 'BK Chicken',
            description: 'Filé de frango empanado, maionese, alface e pão com gergelim',
            image: '/images/products/bk-chicken.png',
            basePrice: 21.9,
            price: 21.9,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho extra',
                required: false,
                options: [
                  { id: 'barbecue', label: 'Barbecue', price: 0 },
                  { id: 'ranch', label: 'Ranch', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  { id: 'descartavel', label: 'Garfo e faca descartável', price: 1 },
                  { id: 'nao', label: 'Não preciso', price: 0, defaultChecked: 'nao' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Burger King Colombo',
    rating: 5,
    image: '/images/burguerking.png',
    deliveryFee: 6,
    minimumOrderPrice: 32,
    estimatedDeliveryTime: { min: 60, max: 70 },
    distance: 12,
    closingTime: '23:59',
    openingTime: '18:00',
    isOpen: false,
    maxValueDeliveryFee: 0,
    promotionRestaurant: false,
    category: 'lanches',
    categories: [
      {
        id: 'burger-king',
        name: 'Burger King',
        description: 'Clássicos grelhados no fogo como churrasco',
        hasPromotions: true,
        products: [
          {
            id: 'whopper',
            name: 'Whopper',
            description: 'Carne bovina grelhada, alface, tomate, cebola, picles e maionese no pão com gergelim',
            image: '/images/products/whopper.png',
            basePrice: 26.9,
            price: 22.9,
            hasPromotions: true,
            multiplePrices: true,
            customizations: [
              {
                id: 'tamanho',
                type: 'single',
                title: 'Tamanho do combo',
                required: true,
                options: [
                  { id: 'normal', label: 'Normal', price: 0, defaultChecked: 'normal' },
                  { id: 'duplo', label: 'Duplo', price: 6 }
                ]
              },
              {
                id: 'bebida',
                type: 'single',
                title: 'Escolha a bebida',
                required: true,
                options: [
                  { id: 'coca', label: 'Coca-Cola', price: 0 },
                  { id: 'fanta', label: 'Fanta', price: 0 },
                  { id: 'agua', label: 'Água sem gás', price: 0 }
                ]
              },
              {
                id: 'batata',
                type: 'single',
                title: 'Tipo de batata',
                required: true,
                options: [
                  { id: 'batata-palito', label: 'Palito', price: 0 },
                  { id: 'batata-rustica', label: 'Rústica', price: 2 }
                ]
              },
              {
                id: 'adicionais',
                type: 'multiple',
                required: false,
                title: 'Adicionais',
                max: 2,
                subtitle: 'Escolha até 2',
                options: [
                  { id: 'bacon', label: 'Bacon', price: 3 },
                  { id: 'cheddar', label: 'Cheddar', price: 2 },
                  { id: 'cebola-caramelizada', label: 'Cebola caramelizada', price: 2 }
                ]
              }
            ]
          },
          {
            id: 'bk-chicken',
            name: 'BK Chicken',
            description: 'Filé de frango empanado, maionese, alface e pão com gergelim',
            image: '/images/products/bk-chicken.png',
            basePrice: 21.9,
            price: 21.9,
            hasPromotions: false,
            multiplePrices: false,
            customizations: [
              {
                id: 'molho',
                type: 'single',
                title: 'Escolha o molho extra',
                required: false,
                options: [
                  { id: 'barbecue', label: 'Barbecue', price: 0 },
                  { id: 'ranch', label: 'Ranch', price: 0 },
                  { id: 'sem', label: 'Sem molho', price: 0, defaultChecked: 'sem' }
                ]
              },
              {
                id: 'talher',
                type: 'single',
                title: 'Precisa de talher?',
                required: false,
                options: [
                  { id: 'descartavel', label: 'Garfo e faca descartável', price: 1 },
                  { id: 'nao', label: 'Não preciso', price: 0, defaultChecked: 'nao' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
