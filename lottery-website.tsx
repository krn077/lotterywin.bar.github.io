import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Ticket, DollarSign } from 'lucide-react';

const LotteryWebsite = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [winningNumber, setWinningNumber] = useState(null);
  const [isWinner, setIsWinner] = useState(false);
  const [gameMessage, setGameMessage] = useState('');

  const handleNumberSelect = () => {
    // Validate input
    const num = parseInt(selectedNumber);
    if (isNaN(num) || num < 1 || num > 100) {
      setGameMessage('Please enter a valid number between 1 and 100');
      return;
    }

    // Generate winning number (1 in 50,000 chance)
    const randomChance = Math.floor(Math.random() * 50000) + 1;
    const randomWinningNumber = randomChance === 1 
      ? num 
      : (Math.floor(Math.random() * 100) + 1);

    setWinningNumber(randomWinningNumber);
    setIsWinner(randomWinningNumber === num);
    
    // Set game message
    setGameMessage(
      randomWinningNumber === num 
        ? '🎉 CONGRATULATIONS! YOU WON THE LOTTERY! 🎉' 
        : 'Sorry, better luck next time!'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-8">
        {/* Colorful Logo */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
            <span className="text-yellow-300">Lottery</span> 
            <span className="text-white"> Win</span>
          </h1>
        </div>

        {/* Pricing and Ticket Information */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 rounded-lg p-4 text-center text-white">
            <div className="flex items-center justify-center space-x-2">
              <Ticket className="text-yellow-300" />
              <span className="text-xl font-bold">Ticket Price: ₹50</span>
            </div>
            <p className="text-sm mt-2">One Ticket = One Chance to Win Big!</p>
          </div>
        </div>

        {/* Lottery Card */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md bg-white/90 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-center flex items-center justify-center">
                <Trophy className="mr-2" />
                Mega Lottery Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-center text-gray-600">
                  Choose a number between 1 and 100
                </p>
                <Input 
                  type="number" 
                  value={selectedNumber}
                  onChange={(e) => setSelectedNumber(e.target.value)}
                  placeholder="Enter your lucky number"
                  min="1"
                  max="100"
                  className="w-full"
                />
                <Button 
                  onClick={handleNumberSelect} 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <DollarSign className="mr-2" />
                  Play Lottery (₹50)
                </Button>

                {winningNumber && (
                  <div className="text-center space-y-2">
                    <p>Winning Number: {winningNumber}</p>
                    <p className={`font-bold ${isWinner ? 'text-green-600' : 'text-red-600'}`}>
                      {gameMessage}
                    </p>
                  </div>
                )}

                <div className="text-center text-xs text-gray-500">
                  <p>🏆 1 in 50,000 chance to win massive prize!</p>
                  <p>Play responsibly. Age 18+ only.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Domain and Contact Information */}
        <div className="text-center mt-6 text-white">
          <p>Official Website: www.lotterywin.com</p>
          <p className="text-sm mt-2">Contact: support@lotterywin.com</p>
        </div>
      </div>
    </div>
  );
};

export default LotteryWebsite;
