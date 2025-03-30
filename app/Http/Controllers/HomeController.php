
<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display the homepage
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        // Get categories by slug
        $categories = [
            'hero' => Category::where('slug', 'hero')->first(),
            'services' => Category::where('slug', 'services')->first(),
            'about' => Category::where('slug', 'about')->first(),
            'testimonials' => Category::where('slug', 'testimonials')->first(),
            'contact' => Category::where('slug', 'contact')->first(),
        ];

        // Get posts for each category
        $posts = [
            'hero' => Post::where('category_id', optional($categories['hero'])->id)->take(1)->get(),
            'services' => Post::where('category_id', optional($categories['services'])->id)->orderBy('order')->get(),
            'about' => Post::where('category_id', optional($categories['about'])->id)->take(1)->get(),
            'testimonials' => Post::where('category_id', optional($categories['testimonials'])->id)->orderBy('order')->get(),
            'contact' => Post::where('category_id', optional($categories['contact'])->id)->take(1)->get(),
        ];

        // Get social media links
        $social_links = [
            'linkedin' => config('app.social.linkedin'),
            'twitter' => config('app.social.twitter'),
            'publications' => config('app.social.publications'),
        ];

        return view('index', compact('categories', 'posts', 'social_links'));
    }

    /**
     * Submit the contact form
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function submitContactForm(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Process the contact form - send email, save to database, etc.
        // ...

        // Redirect back with success message
        return redirect()->back()->with('success', 'Tu mensaje ha sido enviado. Te contactaremos pronto.');
    }
}
