import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Collapse,
  Button,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FiCheck } from 'react-icons/fi';

export default function ServiceCard({ title, description, subServices }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card mb={6}>
      <CardBody p={6}>
        <VStack align="start" spacing={4}>
          <HStack justify="space-between" w="full">
            <VStack align="start" spacing={2} flex={1}>
              <Heading size="md" color="text.primary">
                {title}
              </Heading>
              <Text color="text.secondary" fontSize="sm">
                {description}
              </Text>
            </VStack>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              rightIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              {isExpanded ? 'Less' : 'More'}
            </Button>
          </HStack>
          
          <Collapse in={isExpanded} animateOpacity>
            <Box pt={4} borderTop="1px" borderColor="border.light">
              <Text fontSize="sm" fontWeight="semibold" mb={3} color="text.primary">
                Sub-services include:
              </Text>
              <List spacing={2}>
                {subServices.map((service, index) => (
                  <ListItem key={index} fontSize="sm" color="text.secondary">
                    <ListIcon as={FiCheck} color="primary.500" />
                    {service}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Collapse>
        </VStack>
      </CardBody>
    </Card>
  );
}