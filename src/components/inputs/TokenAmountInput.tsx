import {
  Button,
  chakra,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { formatAmount } from '@multiversx/sdk-dapp/utils';
import { useEffect, useState } from 'react';

interface TokenAmountInputProps {
  available: string;
  decimals?: number;
  setReturnValue: (value: string, valueAsNumber?: number) => void;
  maxButton?: boolean;
  step?: number;
  stepper: boolean;
}

const TokenAmountInput = ({
  available,
  decimals = 18,
  setReturnValue,
  maxButton = true,
  step,
  stepper,
}: TokenAmountInputProps) => {
  const [inputAmount, setInputAmount] = useState('0');

  const setMax = () => {
    const formattedEgldAvailable = formatAmount({
      input: available.toString(),
      decimals,
      digits: 4,
    });
    setInputAmount(formattedEgldAvailable);
    setReturnValue(available);
  };

  const handleInputChange = (valueAsString: string, valueAsNumber: number) => {
    setInputAmount(valueAsString);
    setReturnValue((valueAsNumber * 10 ** decimals).toString());
  };

  useEffect(() => {
    handleInputChange('0', 0);
  }, [available]);

  return (
    <Flex justify="center" w='full' >
      <Flex gap={1} direction={'column'} w='full' >
        <chakra.h6>
          Available: {formatAmount({ input: available, decimals })}{' '}
        </chakra.h6>
        <Flex gap="4" w='full' >
          <NumberInput
            step={step}
            value={inputAmount}
            onChange={handleInputChange}
            min={0}
            max={Number(formatAmount({ input: available, decimals }))}
            precision={4}
            w='full' 
          >
            <NumberInputField textAlign={'center'} w='full' />
            {stepper && (
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            )}
          </NumberInput>
          <Button
          variant={'outline'}

            display={maxButton ? 'block' : 'none'}
            onClick={() => {
              setMax();
            }}
          >
            Max
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TokenAmountInput;
