import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { usePricing } from '@/lib/pricing-context';

interface PlanSelectorProps {
  plans: string[];
  className?: string;
}

export function PlanSelector({ plans, className }: PlanSelectorProps): ReactElement {
  const { selectedPlan, setSelectedPlan } = usePricing();

  return (
    <RadioGroup
      value={selectedPlan}
      onValueChange={setSelectedPlan}
      className={cn('flex justify-center space-x-4', className)}
    >
      {plans.map((plan) => (
        <motion.div
          key={plan}
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <RadioGroupItem
            value={plan}
            id={`plan-${plan}`}
            className="peer sr-only"
            aria-label={`Select ${plan} plan`}
          />
          <Label
            htmlFor={`plan-${plan}`}
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-full border-2 cursor-pointer transition-all duration-300',
              selectedPlan === plan
                ? 'border-primary bg-primary/20 text-primary'
                : 'border-muted-foreground/50 text-muted-foreground hover:border-primary/50'
            )}
          >
            <motion.div
              className="w-4 h-4 rounded-full"
              animate={{
                backgroundColor: selectedPlan === plan ? 'hsl(var(--primary))' : 'transparent',
                scale: selectedPlan === plan ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </Label>
        </motion.div>
      ))}
    </RadioGroup>
  );
}