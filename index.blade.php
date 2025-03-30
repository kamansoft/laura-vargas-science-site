
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ config('app.name', 'Lic. Laura Vargas') }}</title>
    <meta name="description" content="Servicios de consultoría científica" />
    <meta name="author" content="Lic. Laura Vargas" />

    <meta property="og:title" content="Lic. Laura Vargas" />
    <meta property="og:description" content="Servicios de consultoría científica" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="{{ asset('images/og-image.png') }}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lauravargas" />
    <meta name="twitter:image" content="{{ asset('images/og-image.png') }}" />
    
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>

  <body class="min-h-screen">
    @include('partials.navbar')
    
    <!-- Hero Section -->
    @if(isset($categories['hero']))
      <section id="home" class="pt-16 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-science-50 to-science-100">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-science-950">
                {{ $categories['hero']->title ?? 'Mejora Tus Publicaciones Científicas' }}
              </h1>
              @if(isset($posts['hero']) && count($posts['hero']) > 0)
                <p class="text-lg md:text-xl mb-8 text-science-800 leading-relaxed">
                  {!! $posts['hero'][0]->body ?? 'Asesoramiento experto para aumentar el impacto de tu investigación, mejorar los índices de revistas científicas y acelerar tu carrera académica con estrategias basadas en datos.' !!}
                </p>
              @endif
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-science-600 hover:bg-science-700 text-white px-6 py-6 text-lg">
                  Comenzar
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="#services" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border-science-600 text-science-700 hover:bg-science-50 px-6 py-6 text-lg border">
                  Conocer Más
                </a>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center md:justify-end">
              <div class="relative">
                <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
                <img 
                  src="{{ isset($posts['hero']) && isset($posts['hero'][0]->featured_image) ? asset('storage/' . $posts['hero'][0]->featured_image) : asset('images/professional-desk.jpg') }}" 
                  alt="Profesional en escritorio trabajando" 
                  class="relative rounded-lg shadow-xl w-full max-w-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    @endif

    <!-- Services Section -->
    @if(isset($categories['services']))
      <section id="services" class="section-padding bg-white py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-science-900">
              {{ $categories['services']->title ?? 'Servicios de Publicación Científica' }}
            </h2>
            @if(isset($categories['services']->description))
              <p class="text-lg text-science-700 max-w-3xl mx-auto">
                {{ $categories['services']->description }}
              </p>
            @endif
          </div>
          
          @if(isset($posts['services']) && count($posts['services']) > 0)
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              @foreach($posts['services'] as $service)
                <div class="h-full transition-all hover:shadow-lg hover:border-science-300 rounded-lg border p-6">
                  <div class="mb-6">
                    <div class="w-12 h-12 flex items-center justify-center rounded-full bg-science-100 text-science-600 mb-4">
                      @if($loop->iteration == 1)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      @elseif($loop->iteration == 2)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                      @elseif($loop->iteration == 3)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                      @elseif($loop->iteration == 4)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                      @elseif($loop->iteration == 5)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                      @else
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      @endif
                    </div>
                    <h3 class="text-xl text-science-800 font-semibold">{{ $service->title }}</h3>
                  </div>
                  <div class="text-science-700 text-base">
                    {!! $service->body !!}
                  </div>
                </div>
              @endforeach
            </div>
          @endif
        </div>
      </section>
    @endif

    <!-- About Section -->
    @if(isset($categories['about']))
      <section id="about" class="section-padding bg-science-50 py-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-2/5">
              <div class="relative">
                <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
                <img 
                  src="{{ isset($posts['about']) && isset($posts['about'][0]->featured_image) ? asset('storage/' . $posts['about'][0]->featured_image) : asset('images/laura-vargas.jpg') }}" 
                  alt="Lic. Laura Vargas trabajando" 
                  class="relative rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
            
            <div class="lg:w-3/5">
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-science-900">
                {{ $categories['about']->title ?? 'Sobre Lic. Laura Vargas' }}
              </h2>
              
              @if(isset($posts['about']) && count($posts['about']) > 0)
                <div class="text-lg mb-6 text-science-700">
                  {!! $posts['about'][0]->body ?? '' !!}
                </div>
              @endif
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-science-600 mb-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  <h3 class="text-science-800 font-semibold text-lg">200+</h3>
                  <p class="text-science-600">Trabajos Publicados</p>
                </div>
                
                <div class="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-science-600 mb-2"><path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6"></path><path d="M6 21v-2a4 4 0 0 1 4-4h1"></path><circle cx="16" cy="11" r="5"></circle><path d="m17.8 13.4 2.8 2.8"></path></svg>
                  <h3 class="text-science-800 font-semibold text-lg">98%</h3>
                  <p class="text-science-600">Tasa de Éxito</p>
                </div>
                
                <div class="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-science-600 mb-2"><path d="M12 18h7"></path><path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"></path><path d="M7 18V4l10 3 1 11"></path></svg>
                  <h3 class="text-science-800 font-semibold text-lg">15+</h3>
                  <p class="text-science-600">Años de Experiencia</p>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="#" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-science-600 hover:bg-science-700 text-white px-4 py-2">Descargar CV</a>
                <a href="#" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border-science-600 text-science-700 hover:bg-science-50 px-4 py-2 border">Ver Publicaciones</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    @endif

    <!-- Testimonials Section -->
    @if(isset($categories['testimonials']))
      <section id="testimonials" class="section-padding bg-white py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-science-900">
              {{ $categories['testimonials']->title ?? 'Historias de Éxito' }}
            </h2>
            @if(isset($categories['testimonials']->description))
              <p class="text-lg text-science-700 max-w-3xl mx-auto">
                {{ $categories['testimonials']->description }}
              </p>
            @endif
          </div>
          
          @if(isset($posts['testimonials']) && count($posts['testimonials']) > 0)
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              @foreach($posts['testimonials'] as $testimonial)
                <div class="h-full shadow-sm hover:shadow-md transition-all border-science-100 rounded-lg border p-6">
                  <div class="pt-6">
                    <div class="flex mb-4">
                      @for($i = 0; $i < 5; $i++)
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 fill-science-500 text-science-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      @endfor
                    </div>
                    <p class="text-science-700 mb-6 italic">"{{ $testimonial->excerpt ?? substr(strip_tags($testimonial->body), 0, 150) }}..."</p>
                  </div>
                  <div class="border-t border-science-100 pt-4 flex flex-col items-start">
                    <p class="font-semibold text-science-800">{{ $testimonial->author_name ?? $testimonial->title }}</p>
                    <p class="text-science-600 text-sm">{{ $testimonial->author_position ?? '' }}{{ isset($testimonial->author_institution) ? ', ' . $testimonial->author_institution : '' }}</p>
                  </div>
                </div>
              @endforeach
            </div>
          @endif
        </div>
      </section>
    @endif

    <!-- Contact Section -->
    @if(isset($categories['contact']))
      <section id="contact" class="section-padding bg-science-50 py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-science-900">
              {{ $categories['contact']->title ?? 'Contáctanos' }}
            </h2>
            @if(isset($categories['contact']->description))
              <p class="text-lg text-science-700 max-w-3xl mx-auto">
                {{ $categories['contact']->description }}
              </p>
            @endif
          </div>
          
          <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:w-1/3">
              <div class="h-full rounded-lg border p-6 bg-white">
                <div class="pb-6">
                  <h3 class="text-2xl text-science-800 font-semibold mb-4">Información de Contacto</h3>
                  <p class="text-science-600 mb-6">
                    Comunícate a través de cualquiera de estos canales
                  </p>
                </div>
                <div>
                  @if(isset($posts['contact']) && count($posts['contact']) > 0 && isset($posts['contact'][0]->email))
                    <div class="flex items-start mb-6">
                      <div class="mr-4 mt-1 text-science-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-science-800 mb-1">Correo Electrónico</h3>
                        <p class="text-science-700">{{ $posts['contact'][0]->email }}</p>
                      </div>
                    </div>
                  @endif
                  
                  @if(isset($posts['contact']) && count($posts['contact']) > 0 && isset($posts['contact'][0]->phone))
                    <div class="flex items-start mb-6">
                      <div class="mr-4 mt-1 text-science-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-science-800 mb-1">Teléfono</h3>
                        <p class="text-science-700">{{ $posts['contact'][0]->phone }}</p>
                      </div>
                    </div>
                  @endif
                  
                  @if(isset($posts['contact']) && count($posts['contact']) > 0 && isset($posts['contact'][0]->address))
                    <div class="flex items-start mb-6">
                      <div class="mr-4 mt-1 text-science-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-science-800 mb-1">Oficina</h3>
                        <p class="text-science-700">{{ $posts['contact'][0]->address }}</p>
                      </div>
                    </div>
                  @endif
                  
                  @if(isset($posts['contact']) && count($posts['contact']) > 0 && isset($posts['contact'][0]->hours))
                    <div class="flex items-start mb-6">
                      <div class="mr-4 mt-1 text-science-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-science-800 mb-1">Horario de Atención</h3>
                        <p class="text-science-700">{{ $posts['contact'][0]->hours }}</p>
                      </div>
                    </div>
                  @endif
                </div>
              </div>
            </div>
            
            <div class="lg:w-2/3">
              <div class="rounded-lg border p-6 bg-white">
                <div class="pb-6">
                  <h3 class="text-2xl text-science-800 font-semibold mb-4">Enviar un Mensaje</h3>
                  <p class="text-science-600 mb-6">
                    Completa el formulario y te responderé lo antes posible
                  </p>
                </div>
                <div>
                  <form action="{{ route('contact.submit') }}" method="POST">
                    @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label for="name" class="block text-sm font-medium text-science-700 mb-2">
                          Nombre Completo
                        </label>
                        <input 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="Tu nombre" 
                          class="border border-science-200 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-science-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label for="email" class="block text-sm font-medium text-science-700 mb-2">
                          Correo Electrónico
                        </label>
                        <input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          placeholder="tu.email@ejemplo.com" 
                          class="border border-science-200 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-science-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div class="mb-6">
                      <label for="subject" class="block text-sm font-medium text-science-700 mb-2">
                        Asunto
                      </label>
                      <input 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="¿Sobre qué es tu consulta?" 
                        class="border border-science-200 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-science-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div class="mb-6">
                      <label for="message" class="block text-sm font-medium text-science-700 mb-2">
                        Mensaje
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Describe tus necesidades de investigación o preguntas" 
                        class="border border-science-200 rounded-md px-4 py-2 w-full min-h-[150px] focus:outline-none focus:ring-2 focus:ring-science-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-science-600 hover:bg-science-700 text-white px-4 py-2"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    @endif

    @include('partials.footer')
    
    @stack('scripts')
  </body>
</html>
