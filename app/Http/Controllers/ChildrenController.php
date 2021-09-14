<?php

namespace App\Http\Controllers;

use App\Models\ActiveSubscription;
use App\Models\Child;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ChildrenController extends Controller
{
    public function getDevices()
    {
        $activeSubscriptions = ActiveSubscription::whereUser(auth()->user()->id)->get()->toArray();
        $activeSubscriptions = array_filter($activeSubscriptions, function ($subscription) {
            return Carbon::createFromFormat('d.m.Y H:i', $subscription['end_dt'])->gt(Carbon::now());
        });
        $maxNumOfChildren = 0;
        foreach ($activeSubscriptions as $i => $subscription) {
            $device = Subscription::whereName($subscription['name'])->first()->device;
            if ($device > $maxNumOfChildren) {
                $maxNumOfChildren = $device;
            }
        }
        return $maxNumOfChildren;
    }

    public function index()
    {
        return Child::whereParent(auth()->user()->id)->limit($this->getDevices())->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'child.name' => 'required|string',
            'child.year' => 'required|integer',
        ],
            [
                'child.name.required' => 'Укажите имя ребенка',
                'child.year.required' => 'Укажите год рождения ребенка',
            ]);
        $devices = $this->getDevices();
        if (count(Child::whereParent(auth()->user()->id)->get()->toArray()) >= $devices) {
            return response()->json('Вам можно подключить не более ' . $devices . ' устройств', 404);
        }
        $child = Child::create([
            'name' => $request->child['name'],
            'year' => $request->child['year'],
            'parent' => auth()->user()->id,
        ]);
        return response()->json(Child::find($child->id), 200);
    }

    public function show(Request $request)
    {
        return Child::whereId($request->header('child'))->whereParent(auth()->user()->id)->first();
    }

    public function update(Request $request)
    {
        $existedChild = Child::whereId($request->child['id'])->whereParent(auth()->user()->id)->first();
        if (array_key_exists('name', $request->child)) {
            $request->validate(['child.name' => 'string']);
            $existedChild->name = $request->child['name'];
        }
        if (array_key_exists('year', $request->child)) {
            $request->validate(['child.year' => 'integer']);
            $existedChild->year = $request->child['year'];
        }
        if (array_key_exists('allowedTimeOfAppsUse', $request->child)) {
            if (!is_null($request->child['allowedTimeOfAppsUse'])) {
                $request->validate(['child.allowedTimeOfAppsUse' => 'date_format:H:i']);
            }
            $existedChild->allowedTimeOfAppsUse = $request->child['allowedTimeOfAppsUse'];
        }
        $existedChild->update();
        return response()->json($existedChild, 200);
    }

    public function destroy(Request $request)
    {
        $existedChild = Child::whereId($request->header('child'))->whereParent(auth()->user()->id)->first();
        $childCopy = $existedChild;
        $existedChild->delete();
        return response()->json("Ребенок удален", 200);
    }
}
