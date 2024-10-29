<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        try {
            // Set Stripe API key
            Stripe::setApiKey(env('STRIPE_SECRET'));

            // Create the checkout session
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => 'Sample Product',
                        ],
                        'unit_amount' => $this->calculateAmount($request->items),
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => $request->successUrl,
                'cancel_url' => $request->cancelUrl,
            ]);

            return response()->json(['url' => $session->url]);

        } catch (\Stripe\Exception\ApiErrorException $e) {
            // Handle Stripe-specific exceptions
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Exception $e) {
            // Handle any other exceptions
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

    public function calculateAmount($items)
    {
        $amount = 0;
        $cnt = count($items);
        for ($i = 0; $i < $cnt; $i++) {
            $amount += $items[$i]['quantity'] * $items[$i]['price'];
        }
        return $amount * 100; // Amount in cents
    }
}
